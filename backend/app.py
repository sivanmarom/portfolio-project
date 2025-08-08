# backend/app.py
from flask import Flask, jsonify
from flask_cors import CORS
from visitors import bp as visitors_bp
from messages import bp as messages_bp
from emailjs_config import bp as emailjs_config_bp

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.get("/api/hello")
def hello():
    return jsonify(message="Hello from backend!")

# register APIs
app.register_blueprint(visitors_bp)
app.register_blueprint(messages_bp)
app.register_blueprint(emailjs_config_bp)

@app.get("/api/health")
def health():
    return jsonify(ok=True)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)