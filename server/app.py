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

@app.route("/api/add_user", methods=["POST"])
def add_user():
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400
    
    data = request.get_json()
    user_email = data.get("email")
    user_name = data.get("name")
    user_pfp = data.get("pfp")
    
    if not user_email:
        return jsonify({"error": "Missing email"}), 400
    
    session = SessionLocal()
    
    # Check if user already exists
    user = session.query(User).filter(User.email == user_email).first()
    
    if user:
        # Update existing user
        user.name = user_name
        user.pfp = user_pfp
    else:
        # Create new user
        new_user = User(email=user_email, name=user_name, pfp=user_pfp)
        session.add(new_user)
    
    session.commit()
    user_id = user.id if user else session.query(User).filter(User.email == user_email).first().id
    session.close()
    
    return jsonify({
        "message": "User added/updated successfully!",
        "user_id": user_id
    }), 201

if __name__ == "__main__":
    app.run(debug=True)

