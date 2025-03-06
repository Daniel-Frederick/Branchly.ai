from flask import Flask, jsonify
from flask_cors import CORS
from models.profile import init_db
from routes.user import user_bp

app = Flask(__name__)
CORS(app)

# Initialize the database
init_db()

# Register blueprints
app.register_blueprint(user_bp, url_prefix='/api')

# This was a test, should be removed at some point
@app.route("/api")
def home():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == "__main__":
    app.run(debug=True)
