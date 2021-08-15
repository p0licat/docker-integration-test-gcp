from Model.Events import MyEvent
from flask.json import jsonify


class EventsList:
    def __init__(self) -> None:
        self.events = []
    
    def add(self, c: MyEvent):
        self.events.append(c)

    def toJSON(self):
        data = {
            'events': [k.toDICT() for k in self.events],
        }
        return jsonify(data)