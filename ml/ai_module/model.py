import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score

# Citirea fișierului CSV
data = pd.read_csv('data.csv')

# Setări pentru afișarea completă
pd.set_option('display.max_columns', None)
pd.set_option('display.max_colwidth', None)
pd.set_option('display.expand_frame_repr', False)

# Afișează primele rânduri pentru verificare
print(data.head())
print(f"Numărul total de rânduri și coloane: {data.shape}")

# Preprocesarea textului - combinarea coloanelor de text într-o singură coloană
data['TextCombinat'] = (
    data['SituatieClinica'].fillna('') + ' ' + 
    data['SemneSimptome'].fillna('') + ' ' +
    data['InterventiiResurseNecesare'].fillna('') + ' ' +
    data['Observatii'].fillna('')
)

# Definirea etichetei și a caracteristicilor pentru model
X = data['TextCombinat']  # Textul combinat ca trăsătură
y = data['NivelUrgenta']  # Nivelul de urgență ca etichetă

# Vectorizarea textului folosind TfidfVectorizer
vectorizer = TfidfVectorizer()
X_vectorized = vectorizer.fit_transform(X)

# Împărțirea setului de date în antrenament și test
X_train, X_test, y_train, y_test = train_test_split(X_vectorized, y, test_size=0.2, random_state=42)

# Antrenarea modelului Random Forest
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# Realizarea predicțiilor pe setul de test și evaluarea modelului
y_pred = model.predict(X_test)
print(classification_report(y_test, y_pred))
accuracy = accuracy_score(y_test, y_pred)
print(f"Acuratețea modelului: {accuracy:.2f}")

# Salvează modelul și vectorizatorul pentru utilizare ulterioară (opțional)
import joblib
joblib.dump(model, 'model_triaj_rf.pkl')
joblib.dump(vectorizer, 'vectorizer_tfidf.pkl')
print("Modelul și vectorizatorul au fost salvați.")
