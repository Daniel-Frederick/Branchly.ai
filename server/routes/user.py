from flask import Blueprint, jsonify, request
from models.profile import SessionLocal, User

# Create a Blueprint for user-related routes
user_bp = Blueprint('user', __name__)

# Read - GET requests
@user_bp.route("/get_user/<email>", methods=["GET"])
def get_user(email):
    session = SessionLocal()
    
    try:
        user = session.query(User).filter(User.email == email).first()
        
        if not user:
            return jsonify({"error": "User not found"}), 404
            
        return jsonify({
            "user": {
                "id": user.id,
                "email": user.email,
                "name": user.name,
                "pfp": user.pfp
            }
        }), 200
            
    except Exception as e:
        return jsonify({"error": str(e)}), 500
        
    finally:
        session.close()

@user_bp.route("/get_all_users", methods=["GET"])
def get_all_users():
    session = SessionLocal()
    
    try:
        users = session.query(User).all()
        
        result = []
        for user in users:
            result.append({
                "id": user.id,
                "email": user.email,
                "name": user.name,
                "pfp": user.pfp
            })
            
        return jsonify({"users": result}), 200
            
    except Exception as e:
        return jsonify({"error": str(e)}), 500
        
    finally:
        session.close()

# Create - POST Requests
@user_bp.route("/add_user", methods=["POST"])
def add_user():
    # Require input to be json
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400
    
    # Turn data into json and obtain each value
    data = request.get_json()
    user_email = data.get("email")
    user_name = data.get("name")
    user_pfp = data.get("pfp")
    
    if not user_email:
        return jsonify({"error": "Missing email"}), 400
    
    # Start the new table connection
    session = SessionLocal()
    
    try:
        # Check if user already exists
        # In this session, search through the User table to find if 
        #   this email already exists and only grab the first element from the filter array.
        #   user can only equal an email or None, if found or not found
        user = session.query(User).filter(User.email == user_email).first()
        
        # Check if email already exists or not
        if user:
            # Update existing user
            user.name = user_name
            user.pfp = user_pfp
            session.commit()
            user_id = user.id
        else:
            # Create new user
            new_user = User(email=user_email, name=user_name, pfp=user_pfp)
            session.add(new_user)
            session.commit()
            # Refresh to get the ID
            session.refresh(new_user)
            user_id = new_user.id
        
        # Even though POST requests are only meant to Create new data 
        #   it is best practice to return what got added.
        #   This is important so the front-end knows that the new
        #   data was successfully created.
        # The fron-end doesn't need to make a separate GET request 
        #   to retrieve the newly added info
        return jsonify({
            "message": "User added/updated successfully!",
            "user": {
                "id": user_id,
                "email": user_email,
                "name": user_name,
                "pfp": user_pfp,
            }
        }), 201   
    except Exception as e:
        # Revert any changes that were made
        session.rollback()
        return jsonify({"error": str(e)}), 500
    
    finally:
        session.close()

