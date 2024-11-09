from flask import Flask, request, jsonify
from ml.ai_module.serve_model import serve_openai

app = Flask(__name__)

@app.route('/predict', methods=['GET'])
def make_prediction():
    if request.is_json:
        data = request.get_json()
    else:
        data = None

    prediction = serve_openai()
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)
