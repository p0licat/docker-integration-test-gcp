from flask.json import jsonify


class MyEvent:
    def __init__(self) -> None:
        self.description = ""
        

    def toDICT(self):
        data = {
            'description': self.description
        }
        return data

    def toJSON(self):
        data = {
            'description': self.description,
        }
        return jsonify(data)