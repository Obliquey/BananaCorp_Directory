from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pickle
import pandas as pd
print("In App.py")
app = Flask(__name__)
CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'
# CORS(app, resources={r"/*": {"origins": "*"}})
# Load the model from disk
with open('linreg_pipeline.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/api/predict', methods=['POST'])
@cross_origin()
def predict():
    print("In our flask route")
    # Get the request data
    data = request.get_json(force=True)
     # Ensure the data is a list (even if it's just one dictionary)
    # if isinstance(data, dict):
    #     data = [data]

    print("Here's our data?:", data)
    employeeInfoLocation = data["employeeInfo"]["location"]
    employeeInfojobRole = data["employeeInfo"]["jobRole"]

    # Make a prediction
    prediction = model.predict(pd.DataFrame({'employeeInfo.jobRole':[employeeInfojobRole], 'employeeInfo.location':[employeeInfoLocation]}))

    # Return the prediction
    response = jsonify(prediction.tolist())
    print("OUr response:", response)
    # response.headers.add('Access-Control-Allow-Origin','*')
    return response

if __name__ == '__main__':
    app.run(port=5000)
