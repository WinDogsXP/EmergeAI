from flask import Flask, request, jsonify
from ml.ai_module.serve_model import get_gpt_response
from dotenv import load_dotenv
import os
import requests

load_dotenv()

app = Flask(__name__)

app.config['SECRET_OPEN_AI_KEY'] = os.getenv("SECRET_OPEN_AI_KEY")

@app.route('/predict', methods=['POST'])
def make_prediction():
    if request.is_json:
        data = request.get_json()
    else:
        data = None

    prediction = get_gpt_response(data,get_gpt_response)
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)



