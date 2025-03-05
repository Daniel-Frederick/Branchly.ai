from flask import Flask, jsonify, request
from flask_cors import CORS
from models.profile import init_db, SessionLocal, User, Prompt

app = Flask(__name__)
CORS(app)

# Initialize the database
init_db()

@app.route("/api")
def home():
    return jsonify({"message": "Hello from Flask!"})

# Endpoint to add a prompt for a user
@app.route("/api/add-prompt", methods=["POST"])
def add_prompt():
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    data = request.get_json()
    user_email = data.get("email")
    prompt_text = data.get("prompt")
    if not user_email or not prompt_text:
        return jsonify({"error": "Missing email or prompt"}), 400

    session = SessionLocal()

    # Find the user by email (or create a new user if needed)
    user = session.query(User).filter(User.email == user_email).first()
    if not user:
        return jsonify({"error": "User not found"}), 404

    # Create a new prompt associated with the user
    new_prompt = Prompt(user_id=user.id, prompt_text=prompt_text)
    session.add(new_prompt)
    session.commit()
    session.close()

    return jsonify({"message": "Prompt added successfully!"}), 201

if __name__ == "__main__":
    app.run(debug=True)

