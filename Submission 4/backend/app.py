from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, origins=["http://localhost:3001"])

users = []

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users), 200

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    confirm_password = data.get('confirm-password')
    email = data.get('email')
    
    if not username or not password or not confirm_password or not email:
        return jsonify({'error': 'Please provide all required fields'}), 400
    if any(user['username'] == username for user in users):
        return jsonify({'error': 'Username already exists, please use another username'}), 400
    if password != confirm_password:
        return jsonify({'error': 'Passwords do not match'}), 400
    
    user = {
        'username': username,
        'password': password,
        'email': email
    }

    users.append(user)

    return jsonify({'message': 'User created successfully', 'isSignedUp': True}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'error': 'Please provide all required fields', 'isLogin': False}), 400
    user = next((user for user in users if user['username'] == username), None)
    if user is None:
        return jsonify({'error': 'User not found','isLogin': False}), 404
    if user['password'] != password:
        return jsonify({'error': 'Invalid password', 'isLogin': False}), 401

    return jsonify({'message': 'Login successful', 'isLogin': True}), 200

if __name__ == '__main__':
    app.run(debug=True)