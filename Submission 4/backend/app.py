from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, origins=["http://localhost:3001"])

users = []
products = [
    {
        "id": 1,
        "name": "Product 1",
        "description": "Description for Product 1",
        "price": 10.99,
        "image": 'images/product1.png'
    },
    {
        "id": 2,
        "name": "Product 2",
        "description": "Description for Product 2",
        "price": 20.99,
        "image": 'images/product2.jpg'
    },
    {
        "id": 3,
        "name": "Product 3",
        "description": "Description for Product 3",
        "price": 10.99,
        "image": 'images/product3.jpg'
    },
    {
        "id": 4,
        "name": "Product 4",
        "description": "Description for Product 4",
        "price": 10.99,
        "image": 'images/product4.jpg'
    },
    {
        "id": 5,
        "name": "Product 5",
        "description": "Description for Product 5",
        "price": 10.99,
        "image": 'images/product5.jpg'
    },
    {
        "id": 6,
        "name": "Product 6",
        "description": "Description for Product 6",
        "price": 10.99,
        "image": 'images/product6.jpg'
    },
    {
        "id": 7,
        "name": "Product 7",
        "description": "Description for Product 7",
        "price": 10.99,
        "image": 'images/product7.jpg'
    },
    {
        "id": 8,
        "name": "Product 8",
        "description": "Description for Product 8",
        "price": 10.99,
        "image": 'images/product8.jpg'
    },
    {
        "id": 9,
        "name": "Product 9",
        "description": "Description for Product 9",
        "price": 10.99,
        "image": 'images/product9.jpg'
    },
    {
        "id": 10,
        "name": "Product 10",
        "description": "Description for Product 10",
        "price": 10.99,
        "image": 'images/product10.jpg'
    }
]

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

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products), 200

if __name__ == '__main__':
    app.run(debug=True)