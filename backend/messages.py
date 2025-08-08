# backend/messages.py
from flask import Blueprint, jsonify, request
from sqlalchemy.orm import Mapped, mapped_column, Session
from sqlalchemy import Integer, String, Text, DateTime, func
from db import Base, engine, get_session
import os

ADMIN_TOKEN = os.getenv("MESSAGES_ADMIN_TOKEN")  # נגדיר ב-Render

bp = Blueprint("messages", __name__, url_prefix="/api")

class Message(Base):
    __tablename__ = "messages"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    email: Mapped[str] = mapped_column(String(200), nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    created_at: Mapped[str] = mapped_column(DateTime(timezone=True), server_default=func.now())

# יצירת טבלה רק אם היא לא קיימת
Base.metadata.create_all(engine)

@bp.post("/contact")
def save_message():
    data = request.get_json()
    if not data or not all(k in data for k in ("name", "email", "message")):
        return jsonify(ok=False, error="Missing fields"), 400

    with get_session() as s:
        msg = Message(name=data["name"], email=data["email"], content=data["message"])
        s.add(msg)
        s.commit()
        return jsonify(ok=True, id=msg.id, message="Saved to DB"), 201

@bp.get("/messages")
def list_messages():
    # auth פשוט: header או query
    token = request.headers.get("X-Admin-Token") or request.args.get("token")
    if ADMIN_TOKEN and token != ADMIN_TOKEN:
        return jsonify(ok=False, error="unauthorized"), 401

    try:
        limit = min(int(request.args.get("limit", 50)), 200)  # תקרת בטיחות
        offset = int(request.args.get("offset", 0))
    except ValueError:
        return jsonify(ok=False, error="bad pagination"), 400

    with get_session() as s:  # type: Session
        q = s.query(Message).order_by(Message.created_at.desc())
        total = q.count()
        rows = q.offset(offset).limit(limit).all()

    data = [{
        "id": m.id,
        "name": m.name,
        "email": m.email,
        "content": m.content,
        "created_at": m.created_at.isoformat() if m.created_at else None
    } for m in rows]

    return jsonify(ok=True, total=total, limit=limit, offset=offset, items=data)