
from flask import Flask, jsonify, request
from flask_cors import CORS
from models.profile import init_db, SessionLocal, Profile

app = Flask(__name__)
CORS(app)

# Initialize the database
init_db()

@app.route("/")
def home():
    return jsonify({"message": "Hello from Flask!"})

# @app.route("/api/add-user", methods=["POST"])
# def add_profile():
#     if not request.is_json:  # Ensure request is JSON
#         return jsonify({"error": "Request must be JSON"}), 400
#
#     data = request.get_json()  # Safely parse JSON
#     if not data:
#         return jsonify({"error": "Empty request body"}), 400
#
#     email = data.get("email")
#     user_text = data.get("userCreatedText")
#
#     if not email or not user_text:
#         return jsonify({"error": "Missing email or text"}), 400
#
#     session = SessionLocal()
#     new_user = Profile(email=email, userCreatedText=user_text)
#     session.add(new_user)
#     session.commit()
#     session.close()
#
#     return jsonify({"message": "User added successfully!"}), 201

@app.route("/testing")
def testing():
    return "testing is working"

if __name__ == "__main__":
    app.run(debug=True)

