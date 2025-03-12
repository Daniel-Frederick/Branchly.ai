from flask import Blueprint, jsonify, request
from database import SessionLocal
from models.user import User

user_bp = Blueprint('user', __name__)

@user_bp.route("/api/get_user/<email>", methods=["GET"])
def get_user(email):
    session = SessionLocal()
    try:
        user = session.query(User).filter(User.email == email).first()
        if not user:
            return jsonify({"error": "User not found"}), 404
        return jsonify({
            "message": "User retrieved",
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

@user_bp.route("/api/get_all_users", methods=["GET"])
def get_all_users():
    session = SessionLocal()
    try:
        users = session.query(User).all()
        result = [{"id": user.id, "email": user.email, "name": user.name, "pfp": user.pfp} for user in users]
        return jsonify({"message": "Users retrieved", "users": result}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        session.close()

@user_bp.route("/api/add_user", methods=["POST"])
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
    try:
        user = session.query(User).filter(User.email == user_email).first()
        if user:
            user.name = user_name
            user.pfp = user_pfp
            session.commit()
            return jsonify({
                "message": "User updated successfully",
                "user": {
                    "id": user.id,
                    "email": user_email,
                    "name": user_name,
                    "pfp": user_pfp
                }
            }), 200
        else:
            new_user = User(email=user_email, name=user_name, pfp=user_pfp)
            session.add(new_user)
            session.commit()
            session.refresh(new_user)
            return jsonify({
                "message": "User created successfully",
                "user": {
                    "id": new_user.id,
                    "email": user_email,
                    "name": user_name,
                    "pfp": user_pfp
                }
            }), 201
    except Exception as e:
        session.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        session.close()
