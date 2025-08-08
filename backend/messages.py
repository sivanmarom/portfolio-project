# backend/messages.py
from flask import Blueprint, jsonify, request
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import Integer, String, Text, DateTime, func
from db import Base, engine, get_session

bp = Blueprint("messages", __name__)

class Message(Base):
    __tablename__ = "messages"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    email: Mapped[str] = mapped_column(String(200), nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    created_at: Mapped[str] = mapped_column(DateTime(timezone=True), server_default=func.now())

# יצירת טבלה רק אם היא לא קיימת
Base.metadata.create_all(engine)

@bp.post("/api/contact")
def save_message():
    data = request.get_json()
    if not data or not all(k in data for k in ("name", "email", "message")):
        return jsonify(ok=False, error="Missing fields"), 400

    with get_session() as s:
        msg = Message(name=data["name"], email=data["email"], content=data["message"])
        s.add(msg)
        s.commit()

    return jsonify(ok=True, message="Saved to DB")