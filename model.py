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

Input=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
result = data(Input)

print(result.dataset())