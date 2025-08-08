# backend/emailjs_config.py
from flask import Blueprint, jsonify
import os

bp = Blueprint("emailjs_config", __name__, url_prefix="/api")

@bp.get("/emailjs")
def get_emailjs_config():
    return jsonify({
        "serviceId":  os.getenv("REACT_APP_EMAILJS_SERVICE_ID") or os.getenv("EMAILJS_SERVICE_ID"),
        "templateId": os.getenv("REACT_APP_EMAILJS_TEMPLATE_ID") or os.getenv("EMAILJS_TEMPLATE_ID"),
        "publicKey":  os.getenv("REACT_APP_EMAILJS_PUBLIC_KEY")  or os.getenv("EMAILJS_PUBLIC_KEY"),
    })