from flask import Flask, request, jsonify
from ml.ai_module.serve_model import serve_openai
app = Flask(__name__)

@app.post('/predict')
def make_prediction():
    data = request.get_json()
    prediction = serve_openai()
    return jsonify(({'prediction': prediction}))

if __name__ == '__main__':
    app.run(debug=True)