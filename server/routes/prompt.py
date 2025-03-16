from flask import Blueprint, jsonify, request
from database import SessionLocal
from models import User

prompt_bp = Blueprint('prompt', __name__)

@prompt_bp.route("/add_prompt", methods=["POST"])
def add_prompt():
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    data = request.get_json()
    # prompt_id = data.get("id")
    # prompt_user_id = data.get("user_id")
    prompt_text = data.get("prompt")

    if not prompt_text:
        return jsonify({"error": "Missing Prompt"}), 400

    session = SessionLocal()
    # TODO: Finish implementing

