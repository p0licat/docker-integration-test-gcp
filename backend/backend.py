from flask import json
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin

import os
pg_addr = os.environ['PG_ADDR']
read_password = os.environ['PG_PASS']
getLast50PapersViewName = os.environ['last50papersViewName']
getFrequencyEventsViewName = os.environ['getFrequencyEventsViewName']


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:{0}@{1}:5432/flask_backend'.format(read_password, pg_addr)
db = SQLAlchemy(app)

class MyEventDB(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(64))
    date = db.Column(db.DateTime)

    def toDict(self):
        me_dict = {}
        me_dict["id"] = self.id
        me_dict["description"] = self.description
        return me_dict

    def __repr__(self):
        return "<Event %r>" % self.description

@app.route("/getAllEvents")
@cross_origin()
def queryEvents():

    v = []
    v = MyEventDB.query.all()
    vj = {"events": [k.toDict() for k in v]}

    return json.jsonify(vj)

@app.route("/getFrequencyEvents")
@cross_origin()
def queryFrequency():
    import psycopg2
    conn_string = "host='{1}' dbname='browsing' user='postgres' password='{0}'".format(read_password, pg_addr)
    conn = psycopg2.connect(conn_string)
    cur = conn.cursor()
    cur.execute(""" select * from "{0}" """.format(getFrequencyEventsViewName))
    tbuff = []
    for k in cur.fetchall():
        tbuff.append(k)
    cur.close()
    conn.close()

    inc_id = 0
    
    evlist = []
    fdict = {"events": evlist}
    for i in tbuff[:20]:
        event = {
            "id": inc_id
        }
        inc_id += 1
        event["date"] = i[1].isoformat()
        event["description"] = i[0]
        evlist.append(
            event
        )

    return json.jsonify(fdict)

@app.route("/getLast50Papers")
@cross_origin()
def getLast50Papers():

    import psycopg2
    conn_string = "host='{1}' dbname='browsing' user='postgres' password='{0}'".format(read_password, pg_addr)
    conn = psycopg2.connect(conn_string)
    cur = conn.cursor()
    cur.execute(""" select * from "{0}" """.format(getLast50PapersViewName))
    tbuff = []
    for k in cur.fetchall():
        tbuff.append(k)
    cur.close()
    conn.close()

    inc_id = 0
    
    evlist = []
    fdict = {"publications": evlist}
    for i in tbuff:
        event = {
            "id": inc_id
        }
        inc_id += 1
        event["browsing_date"] = i[1].isoformat()
        event["browse_url"] = i[2]
        event["tags"] = i[3]
        evlist.append(
            event
        )

    return json.jsonify(fdict)
