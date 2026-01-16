from flask import Flask, request, jsonify

app = Flask(__name__)
stored_data = ""

@app.route("/push", methods=["POST"])
def push():
    global stored_data
    stored_data = request.get_data(as_text=True)
    return "OK"

@app.route("/get", methods=["GET"])
def get():
    return stored_data or "empty"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
