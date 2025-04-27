from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)
model = joblib.load('forex_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    prediction = model.predict([data['features']])
    return jsonify({'suggestion': 'Buy' if prediction[0] == 1 else 'Sell'})

if __name__ == '__main__':
    app.run(port=5001)