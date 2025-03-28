from os import error
from flask import Blueprint, jsonify, request
from database import SessionLocal
from models import Prompt

prompt_bp = Blueprint('prompt', __name__)

@prompt_bp.route("/get_all_prompts", methods=["GET"])
def get_all_prompts():
    session = SessionLocal()
    try:
        prompts = session.query(Prompt).all()
        result = [{"id": prompt.id, "user_id": prompt.user_id, "prompt_text": prompt.prompt_text} for prompt in prompts]
        return jsonify({"message": "All Prompts retrieved", "prompts": result}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally: 
        session.close()

@prompt_bp.route("/add_prompt", methods=["POST"])
def add_prompt():
    # Check if the request is JSON
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    # TODO: Get data from the JSON request
    data = request.get_json()
    # user_id = data.get("user_id") # This is not good to have here
    # prompt_text = data.get("prompt")
    user_id = 1
    prompt_text = "testing prompt"

    # Validate required fields
    if not user_id or not prompt_text:
        return jsonify({"error": "Missing user_id or prompt"}), 400

    # Create a database session
    session = SessionLocal()
    try:
        # Create a new prompt
        new_prompt = Prompt(user_id=user_id, prompt_text=prompt_text)
        session.add(new_prompt)
        session.commit()
        # Refresh to get the generated id
        session.refresh(new_prompt)
        # Return success response
        return jsonify({
            "message": "Prompt created successfully",
            "prompt": {
                "id": new_prompt.id,
                "user_id": new_prompt.user_id,
                "prompt_text": new_prompt.prompt_text
            }
        }), 201
    except Exception as e:
        session.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        session.close()
