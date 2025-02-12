from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({"message": "Hello from Flask!"})

@app.route("/api/data")
def get_data():
    sample_data = {"name": "Flask", "type": "Backend", "status": "Connected to React!"}
    return jsonify(sample_data)

if __name__ == "__main__":
    app.run(debug=True)

