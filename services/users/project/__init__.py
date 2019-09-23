import os

from flask import Flask, jsonify
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# instantiate the app
app = Flask(__name__)
cors = CORS()

# instantiate the api
api = Api(app)

# Set config
app_settings = os.getenv('APP_SETTINGS')
app.config.from_object(app_settings)

# instantiate the db
db = SQLAlchemy(app)


# model
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    fname = db.Column(db.String(128), nullable = False)
    lname = db.Column(db.String(128), nullable = False)
    email = db.Column(db.String(128), nullable = False)
    active = db.Column(db.Boolean(), default = True, nullable = False)

    def __init__(self, fname, lname, email):
        self.fname = fname
        self.lname = lname
        self.email = email


class UsersPing(Resource):
    def get(self):
        return {
            'status': 'success',
            'message': 'pong!'
        }


api.add_resource(UsersPing, '/users/ping')
