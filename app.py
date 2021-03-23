#flask server for plotly hw
import pandas as pd
import numpy as np
from flask import Flask, jsonify

sample_data = pd.read_json('samples.json')

s_data = sample_data.to_dict()

app = Flask(__name__)

@app.route("/", methods=["GET"])
def home():
    response = jsonify(s_data)
    # Enable Access-Control-Allow-Origin
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response

if __name__ == '__main__':
    app.run(debug = True)