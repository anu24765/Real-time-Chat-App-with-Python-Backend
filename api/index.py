from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)

CORS(app)  # Enable CORS for all routes

chat_history = []


@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/api/send_message', methods=['POST'])
def send_message():
    message = request.json['message']
    chat_history.append({'sender': 'user', 'message': message})
    # Process message and generate bot response here
    # Append bot response to chat_history
    return jsonify({'success': True})

@app.route('/api/get_chat_history', methods=['GET'])
def get_chat_history():
    return jsonify({'chat_history': chat_history})

