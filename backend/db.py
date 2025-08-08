# backend/db.py
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase

DATABASE_URL = os.environ.get("DATABASE_URL")  # יסופק ע"י Render

if not DATABASE_URL:
    # לשימוש לוקאלי אפשר לשים חיבור זמני אם אין Postgres
    # DATABASE_URL = "postgresql+psycopg2://user:pass@localhost:5432/mydb"
    raise RuntimeError("DATABASE_URL not set. Define it in env vars.")

engine = create_engine(DATABASE_URL, pool_pre_ping=True)
SessionLocal = sessionmaker(bind=engine, expire_on_commit=False)

class Base(DeclarativeBase):
    pass

def get_session():
    return SessionLocal()

def init_db():
    # יוצרים טבלאות אם לא קיימות ומוודאים שיש שורה אחת ב-counters
    from sqlalchemy import Integer, String
    from sqlalchemy.orm import Mapped, mapped_column
    class Counter(Base):
        __tablename__ = "counters"
        id: Mapped[int] = mapped_column(Integer, primary_key=True)
        total: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
        uniques: Mapped[int] = mapped_column(Integer, nullable=False, default=0)

    class Seen(Base):
        __tablename__ = "seen"
        uid: Mapped[str] = mapped_column(String(64), primary_key=True)

    Base.metadata.create_all(engine)

    from sqlalchemy import select
    with get_session() as s:
        if s.get(Counter, 1) is None:
            s.add(Counter(id=1, total=0, uniques=0))
            s.commit()