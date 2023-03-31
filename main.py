from flask import Flask, render_template, request,jsonify
from flask_cors import CORS,cross_origin
import requests

application = Flask(__name__) # initializing a flask app
app=application

import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

class data:
    def __init__(self, Input):
        self.input = Input

    def dataset(self):
        train_df = pd.read_csv('Training.csv')
        train_df.drop(['Unnamed: 133'], axis=1, inplace=True)
        X = train_df.iloc[:, :-1].values
        y = train_df.iloc[:, 132].values
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)
        rf_clf = RandomForestClassifier(criterion='entropy', min_samples_leaf=2)
        rf_clf.fit(X_train, y_train)
        pred_rf = rf_clf.predict([self.input])
        result = pred_rf[0]
        return result

@app.route('/',methods=['GET'])  # route to display the home page
@cross_origin()
def homePage():
    return render_template("index.html")

@app.route('/sign.html',methods=['GET'])  
def signinPage():
    return render_template("sign.html")

@app.route('/step-1.html',methods=['GET'])  
def step1Page():
    return render_template("step-1.html")



@app.route('/step-2.html',methods=['GET'])  
def step2Page():
    return render_template("step-2.html")


@app.route('/result', methods=['POST'])
def process_form():
    checkbox_states = request.form.getlist('choice')
    d = {}
    dataset = pd.read_csv('Testing.csv')
    col = list(dataset.columns)[:-1]
    for i in col:
        if i in checkbox_states:
            d[i] = 1
        else:
            d[i] = 0
    result = data(list(d.values()))
    r1 = result.dataset()
    
    return render_template('result.html',result=r1)


@app.route('/step-3.html',methods=['GET'])  
def step3Page():
    return render_template("step-3.html")

@app.route('/step-4.html',methods=['GET'])  
def step4Page():
    return render_template("step-4.html")

@app.route('/step-5.html',methods=['GET'])  
def step5Page():
    return render_template("step-5.html")


@app.route('/step-6.html',methods=['GET'])  
def step6Page():
    return render_template("step-6.html")


if __name__ == "__main__":
    app.run(debug=True)