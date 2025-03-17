from flask import Flask, jsonify
from flask_cors import CORS
from database import init_db
from routes.user import user_bp

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": ["http://localhost:5173"]}})
init_db()

# TODO: Create a Login Flow w/ frontend
app.register_blueprint(user_bp, url_prefix='/api')

@app.route("/api")
def home():
    return jsonify({"message": "Hello from Flask!"})

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not found"}), 404

if __name__ == "__main__":
    import os
    app.run(debug=os.getenv('FLASK_DEBUG', 'False') == 'True')
