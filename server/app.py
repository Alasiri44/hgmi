from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

def load_data():
    with open("db.json", "r") as file:
        return json.load(file)

@app.route("/")
def home():
    return jsonify({"message": "Church API running"})


@app.route("/ministries")
def get_ministries():
    data = load_data()
    return jsonify(data["ministries"])


@app.route("/events")
def get_events():
    data = load_data()
    return jsonify(data["events"])


if __name__ == "__main__":
    app.run(debug=True)