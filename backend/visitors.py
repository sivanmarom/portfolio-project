# backend/visitors.py
from flask import Blueprint, jsonify, request
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import Integer, String, select
from .db import Base, engine, get_session
import hashlib

bp = Blueprint("visitors", __name__)

class Counter(Base):
    __tablename__ = "counters"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    total: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    uniques: Mapped[int] = mapped_column(Integer, nullable=False, default=0)

class Seen(Base):
    __tablename__ = "seen"
    uid: Mapped[str] = mapped_column(String(64), primary_key=True)

# create tables if missing
Base.metadata.create_all(engine)

def is_bot(ua: str | None) -> bool:
    u = (ua or "").lower()
    return any(t in u for t in ["bot","crawler","spider","preview","curl"])

def get_stats():
    with get_session() as s:
        ctr = s.get(Counter, 1)
        if not ctr:
            ctr = Counter(id=1, total=0, uniques=0)
            s.add(ctr); s.commit()
        return {"total": ctr.total, "uniques": ctr.uniques}

@bp.post("/api/visit")
def visit():
    if is_bot(request.headers.get("user-agent")):
        return jsonify(ok=True, **get_stats())

    raw = f"{request.remote_addr}|{request.headers.get('user-agent','')}"
    uid = hashlib.sha256(raw.encode()).hexdigest()[:16]

    with get_session() as s:
        ctr = s.get(Counter, 1)
        if not ctr:
            ctr = Counter(id=1, total=0, uniques=0)
            s.add(ctr)
        ctr.total += 1

        if s.get(Seen, uid) is None:
            s.add(Seen(uid=uid))
            ctr.uniques += 1

        s.commit()
    return jsonify(ok=True, **get_stats())

@bp.get("/api/visits")
def visits():
    return jsonify(get_stats())