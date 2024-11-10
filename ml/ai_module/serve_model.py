import requests



from flask import Flask, request, jsonify
import pandas as pd
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer

app = Flask(__name__)

# Încarcă modelul RandomForest și vectorizatorul TF-IDF
model = joblib.load('model_triaj_rf.pkl')
vectorizer = joblib.load('vectorizer_tfidf.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    # Primește datele JSON de la cerere
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({'error': 'Lipsă câmpul text pentru predicție'}), 400

    # Preprocesarea textului primit
    input_text = data['text']
    input_vectorized = vectorizer.transform([input_text])

    # Realizează predicția
    prediction = model.predict(input_vectorized)
    predicted_class = int(prediction[0])

    # Returnează predicția ca răspuns JSON
    return jsonify({'NivelUrgenta': predicted_class})

if __name__ == '__main__':
    app.run(debug=True)
