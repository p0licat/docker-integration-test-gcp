from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

read_password = ""
with open('Model/SqlAlchemy/db_config.txt', 'r') as fd:
    read_password = fd.read().rstrip()
assert read_password != ""

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:{0}@192.168.0.192:5432/flask_backend'.format(read_password)
db = SQLAlchemy(app)

class MyEventDB(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(64))

    def __repr__(self):
        return "<Event %r>" % self.description
