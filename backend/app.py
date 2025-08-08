# backend/app.py
from flask import Flask, jsonify
from flask_cors import CORS
from visitors import bp as visitors_bp  # אם הקובץ באותה תיקייה

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/api/hello')
def hello():
    return jsonify(message="Hello from backend!")

# register visitors API
app.register_blueprint(visitors_bp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)