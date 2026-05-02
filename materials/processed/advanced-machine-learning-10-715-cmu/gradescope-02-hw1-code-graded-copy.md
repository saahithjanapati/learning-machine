# gradescope-02-hw1-code-graded-copy

Source: `materials/archive/advanced-machine-learning-10-715-cmu/gradescope-graded-copies/gradescope-02-hw1-code-graded-copy.pdf`
Duplicate equivalents: `gradescope-02-hw1-code-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 8

## Page 1
### Content
# HW1 Code
● Graded

**Student**
Saahith Janapati

**Total Points**
50 / 50 pts

**Autograder Score**
50.0 / 50.0

**Passed Tests**
* 2.1) Evaluate loss method (5/5)
* 2.2) Evaluate subgradient method (5/5)
* 2.3) Evaluate predict method (5/5)
* 2.4) Evaluate train method (5/5)
* 3.1) Evaluate predict method (10/10)
* 3.2) Evaluate train method (10/10)
* 3.3) Evaluate get_predictions method (10/10)

### Visual Description
This is a summary page for a graded assignment. It displays the student's name, total points earned (50/50), and a list of seven passed autograder tests with their respective scores in green text.

---

## Page 2
### Content
# Autograder Results

* **2.1) Evaluate loss method (5/5)**
* **2.2) Evaluate subgradient method (5/5)**
* **2.3) Evaluate predict method (5/5)**
* **2.4) Evaluate train method (5/5)**
* **3.1) Evaluate predict method (10/10)**
* **3.2) Evaluate train method (10/10)**
* **3.3) Evaluate get_predictions method (10/10)**

**Submitted Files**

### Visual Description
This page shows the detailed autograder results. Each test case is presented in a separate light-gray rectangular box with the test name and score (e.g., "5/5") written in green, indicating success. At the bottom, there is a header for "Submitted Files".

---

## Page 3
### Content
**perceptron.py**
```python
1 import numpy as np
2 
3 class Perceptron:
4     def __init__(self):
5         """
6         Radial Basis Function Kernel Perceptron.
7         This Perceptron algorithm classifies datapoints of dimension `d` into two classes {-1, 1}
8         using the kernel method with a Radial Basis Function (RBF) kernel.
9         """
10        self.iterations = 500
11        self.sigma = 0.5
12        self.alpha = np.zeros(200)
13        np.random.seed(0)
14 
15     def predict(self, X: np.ndarray, x: np.ndarray, y: np.ndarray) -> float:
16         """
17         Input
18         ----------
19         X: numpy array of shape (n, d)
20         x: numpy array of shape (d, )
21         y: numpy array of shape (n, )
22 
23         Return
24         ------
25         prediction: float
26         """
27 
28 
29         K = np.exp(np.sum((X - x[None, :]) ** 2, axis=1) / (-2 * self.sigma**2)) # (n, )
30         prediction = np.sum(self.alpha * K * y)
31         return prediction
32 
33 
34     def train(self, X, y):
35         """
36         Input
37         ----------
38         X: numpy array of shape (n, d)
39         y: numpy array of shape (n, )
40 
41         Return
42         ------
43         None
44         """
45         # TODO: write the training algorithm for a perceptron with a RBF kernel
46         # The training algorithm should run for `self.iterations` iterations and update self.alpha
47         # Use the predict method
48         for t in range(self.iterations):
49             n = X.shape[0]
50             for data_index in range(n):
51                 curr_x = X[data_index]
52                 prediction = self.predict(X, curr_x, y)
53                 correct_answer = y[data_index]
```

### Visual Description
This page displays a code editor view for a file named `perceptron.py`. It contains the initial part of a Python class `Perceptron`, including the `__init__`, `predict`, and the beginning of the `train` method. Line numbers 1 through 53 are visible.

---

## Page 4
### Content
```python
54 
55                 if (prediction <= 0 and correct_answer > 0) or (prediction > 0 and correct_answer < 0):
56                     # if we got here, we got the answer wrong
57                     # update the corresponding entry in alpha
58                     self.alpha[data_index] += 1
59 
60         return
61 
62 
63     def get_predictions(self, X: np.ndarray, X_test: np.ndarray, y: np.ndarray) -> np.ndarray:
64         """
65         Input
66         ----------
67         X: numpy array of shape (n, d)
68         X_test: numpy array of shape (m, d)
69         y: numpy array of shape (n, )
70 
71         Return
72         ------
73         y_pred: numpy array of shape (m, )
74         """
75         preds = []
76 
77         # TODO: write the algorithm for computing all the predictions for the test data.
78         # Use the predict method
79         # 
80         m = X_test.shape[0]
81         for i in range(m):
82             curr_x_test = X_test[i]
83             prediction = self.predict(X, curr_x_test, y)
84             preds.append(prediction)
85 
86         y_pred = np.where(np.array(preds) > 0, 1, -1)
87         # pred_labels = np.where(predictions >= 0, 1, -1)
88 
89 
90         return y_pred
```

### Visual Description
This page continues the code for `perceptron.py`, showing the completion of the `train` method and the full implementation of the `get_predictions` method. Line numbers 54 through 90 are visible.

---

## Page 5
### Content
**soft_svm.py**
```python
1 import numpy as np
2 
3 class SoftSVM(object):
4     def __init__(self, C):
5         """
6         Soft Support Vector Machine Classifier
7         The soft SVM algorithm classifies data points of dimension `d` 
8         (this dimension includes the bias) into {-1, +1} classes.
9         It receives a regularization parameter `C` that
10        controls the margin penalization.
11        """
12        self.C = C
13 
14 
15     def loss(self, X: np.ndarray, y: np.ndarray):
16         """
17         Input
18         ----------
19         X: numpy array of shape (n, d)
20         y: numpy array of shape (n, )
21 
22         Return
23         ------
24         svm_loss: float
25         """
26 
27         # TODO: write the soft svm loss that incorporates regularization and hinge loss
28         weight_reg_term = 0.5 * np.sum(self.w ** 2)
29 
30         hinge_vec = 1 - y * (X @ self.w)
31         hinge_vec = np.where(hinge_vec < 0, 0, hinge_vec)
32         hinge_sum = np.sum(hinge_vec)
33 
34         return weight_reg_term + self.C * hinge_sum 
35 
36 
37     def subgradient(self, X: np.ndarray, y: np.ndarray) -> np.ndarray:
38         """
39         Input
40         ----------
41         X: numpy array of shape (n, d)
42         y: numpy array of shape (n, )
43 
44         Return
45         ------
46         subgrad: numpy array of shape (d, )
47         """
48 
49         hinge_term = 1 - (X @ self.w) * y # (n,d) @ (d) --> n
50         indicator = np.where(hinge_term > 0, 1, 0) # n
51 
52         product_term = X * y[:, None] * indicator[:, None]
53 
```

### Visual Description
This page displays a code editor view for a file named `soft_svm.py`. It contains the beginning of the `SoftSVM` class, including the `__init__`, `loss`, and the start of the `subgradient` method. Line numbers 1 through 53 are visible.

---

## Page 6
### Content
```python
54         subgrad = self.w - self.C * np.sum(product_term, axis=0)
55 
56         assert subgrad.shape==(X.shape[1],),\
57         f'Check your subgrad dimensions they should be {(X.shape[1],)} and are {subgrad.shape}'
58         return subgrad
59 
60 
61     def predict(self, X: np.ndarray) -> np.ndarray:
62         """
63         Input
64         ----------
65         X: numpy array of shape (n, d)
66 
67         Return
68         ------
69         y_hat: numpy array of shape (n, )
70         """
71         signs = X @ self.w
72         y_hat = np.where(signs < 0, -1, 1)
73 
74         assert y_hat.shape==(len(X),),\
75         f'Check your y_hat dimensions they should be {(len(X),)} and are {y_hat.shape}'
76         return y_hat
77 
78 
79     def get_batch(self, X: np.ndarray, y: np.ndarray, batch_size: int):
80         """
81         Input
82         ----------
83         X: numpy array of shape (n, d)
84         y: numpy array of shape (n, )
85 
86         Return
87         ------
88         batch_X, batch_y: numpy arrays of shape (batch_size, d), (batch_size, )
89         """
90         # TODO: Randomly sample a batch of size batch_size from data arrays X and y
91         n = X.shape[0]
92         idx = np.random.choice(n, size=batch_size, replace=False)
93 
94         batch_X = X[idx]
95         batch_y = y[idx]
96 
97         assert len(batch_X)==len(batch_y), f'Check your batch dimensions'
98         return batch_X, batch_y
99 
100 
101     def accuracy(self, X: np.ndarray, y: np.ndarray):
102         """
103         Input
104         ----------
105         X: numpy array of shape (n, d)
106         y: numpy array of shape (n, )
107 
108         Return
109         ------
```

### Visual Description
This page continues the code for `soft_svm.py`, showing the completion of the `subgradient` method, the full `predict` and `get_batch` methods, and the start of the `accuracy` method. Line numbers 54 through 109 are visible.

---

## Page 7
### Content
```python
110         accuracy: float
111         """
112         n = X.shape[0]
113         preds = X @ self.w
114         num_correct = np.sum(np.where(preds * y > 0, 1, 0))
115 
116         accuracy = num_correct / n
117         return accuracy
118 
119 
120 
121     def train(self,
122         X_train: np.ndarray, y_train: np.ndarray,
123         X_test: np.ndarray, y_test: np.ndarray,
124         n_iterations: int, learning_rate: float,
125         batch_size=1, random_seed=1) -> None:
126         """
127         Input
128         ----------
129         X_train: numpy array of shape (n, d)
130         y_train: numpy array of shape (n, )
131         X_test: numpy array of shape (n, d)
132         y_test: numpy array of shape (n, )
133         n_iterations: int
134         learning_rate: float
135         random_seed: int
136         """
137 
138         # Check inputs
139         assert len(X_train)==len(y_train)
140         assert np.array_equal(np.sort(np.unique(y_train)), np.array([-1, 1]))
141 
142         # Initialize model
143         np.random.seed(random_seed)
144         self.d = X_train.shape[1]
145         self.w = np.random.normal(size=(self.d,))
146 
147         # print("loss: ", self.loss(X_train, y_train))
148 
149         iter_i = []
150         train_loss_i = []
151         test_loss_i = []
152 
153         train_acc_i = []
154         test_acc_i = []
155 
156 
157         for t in range(n_iterations):
158 
159             batch_X, batch_y = self.get_batch(X_train, y_train, batch_size)
160 
161             # update weights
162             subgrad = self.subgradient(batch_X, batch_y)
163             self.w = self.w - learning_rate * subgrad
164 
165             # calculate train/test loss
```

### Visual Description
This page continues the code for `soft_svm.py`, showing the completion of the `accuracy` method and the beginning of the `train` method, including initialization and the start of the training loop. Line numbers 110 through 165 are visible.

---

## Page 8
### Content
```python
166             train_loss = self.loss(X_train, y_train)
167             test_loss = self.loss(X_test, y_test)
168 
169             # calculate train/test accuracy
170             train_acc = self.accuracy(X_train, y_train)
171             test_acc = self.accuracy(X_test, y_test)
172 
173 
174             # update iteration data
175             iter_i.append(t)
176 
177             train_loss_i.append(train_loss)
178             test_loss_i.append(test_loss)
179 
180             train_acc_i.append(train_acc)
181             test_acc_i.append(test_acc)
182 
183 
184         # evaluate final training/test accuracy
185         final_train_accuracy = self.accuracy(X_train, y_train)
186         final_test_accuracy = self.accuracy(X_test, y_test)
187 
188         # evaluate final train/test loss
189         final_train_loss = self.loss(X_train, y_train)
190         final_test_loss = self.loss(X_test, y_test)
191 
192 
193         training_log_data = {
194             "iter_i": iter_i,
195 
196             "train_loss_i": train_loss_i,
197             "test_loss_i": test_loss_i,
198 
199             "train_acc_i": train_acc_i,
200             "test_acc_i": test_acc_i,
201 
202             "final_train_loss": final_train_loss,
203             "final_test_loss": final_test_loss,
204 
205             "final_train_acc": final_train_accuracy,
206             "final_test_acc": final_test_accuracy
207         }
208 
209 
210         return training_log_data
```

### Visual Description
This page shows the final part of the `train` method in `soft_svm.py`, where metrics are calculated and stored in a dictionary named `training_log_data`, which is then returned. Line numbers 166 through 210 are visible.

---
