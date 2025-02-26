from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

# SQLite setup (this will create a new database file on the first run)
def init_db():
    conn = sqlite3.connect('example.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)''')
    conn.commit()
    conn.close()

@app.route("/")
def home():
    return jsonify({"message": "Hello from Flask!"})

@app.route("/api/add-user")
def add_user():
    conn = sqlite3.connect('example.db')
    c = conn.cursor()
    c.execute("INSERT INTO users (name, age) VALUES (?, ?)", ("John Doe", 30))
    conn.commit()
    conn.close()
    return jsonify({"message": "User added!"})

@app.route("/testing")
def testing():
    return "testing is working"

if __name__ == "__main__":
    init_db()
    app.run(debug=True)

