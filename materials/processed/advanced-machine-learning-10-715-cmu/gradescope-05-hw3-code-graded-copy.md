# gradescope-05-hw3-code-graded-copy

Source: `materials/archive/advanced-machine-learning-10-715-cmu/gradescope-graded-copies/gradescope-05-hw3-code-graded-copy.pdf`
Duplicate equivalents: `gradescope-05-hw3-code-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 10

## Page 1
### Content
**HW3 Code**  🟢 **Graded**

1 Day, 1 Hour Late

**Student**
Saahith Janapati

**Total Points**
60 / 60 pts

**Autograder Score**
60.0 / 60.0

**Passed Tests**
* 1.2) Evaluate NN initialization (10/10)
* 1.3.1) Evaluate implementation for loss function (5/5)
* 1.3.2) Evaluate accuracy and loss for the NN (20/20)
* 2.2) Evaluate CNN initialization (15/15)
* 2.3) Evaluate implementation for the Dropout layer (5/5)
* 2.4) Evaluate accuracy and loss for the CNN (5/5)

### Visual Description
A summary page from Gradescope for a graded assignment titled "HW3 Code". It displays the student's name, total points earned (60/60), and a breakdown of scores for six specific autograder tests.

---

## Page 2
### Content
**Autograder Results**

* 1.2) Evaluate NN initialization (10/10)
* 1.3.1) Evaluate implementation for loss function (5/5)
* 1.3.2) Evaluate accuracy and loss for the NN (20/20)
* 2.2) Evaluate CNN initialization (15/15)
* 2.3) Evaluate implementation for the Dropout layer (5/5)
* 2.4) Evaluate accuracy and loss for the CNN (5/5)

**Submitted Files**

### Visual Description
A list of autograder results showing six test cases, each marked with a green bar indicating full marks. Below the results is a header for "Submitted Files".

---

## Page 3
### Content
**q1_mnist.py**  Download

```python
1 import torch
2 import torch.nn as nn
3 import torch.optim as optim
4 from torchvision import datasets, transforms
5 from torch.utils.data import DataLoader
6 import numpy as np
7 from tqdm import tqdm
8 import pickle
9
10 RANDOM_SEED = 42
11 torch.manual_seed(RANDOM_SEED)
12 np.random.seed(RANDOM_SEED)
13
14 # Q1: Implementing a Warmup neural network
15 class WarmupNN(nn.Module):
16     def __init__(self):
17         super(WarmupNN, self).__init__()
18 
19         # # TODO: create a network as per the provided specification
20         # # Hint: Lookup nn.Flaten, nn.Linear, nn.ReLU, and look at the dataset/dataloader to figure out the dimensions
21         # raise NotImplementedError
22         self.fc1 = nn.Linear(28 * 28, 256)
23         self.fc2 = nn.Linear(256, 128)
24         self.fc3 = nn.Linear(128, 10)
25
26     def forward(self, x):
27         # # TODO: write the forward pass of this network
28         # raise NotImplementedError
29         x = x.view(-1, 28 * 28)
30         x = torch.relu(self.fc1(x))
31         x = torch.relu(self.fc2(x))
32         x = self.fc3(x)
33         return x
34
35
36 def cross_entropy_loss(logits, target):
37     """
38     logits: (N, C)
39     targets: (C)
40     """
41     # compute softmax
42     # logits have shape of (B, C)
43     row_exps = torch.sum(torch.exp(logits), dim=1, keepdim=True) # (B,)
44     probs = torch.exp(logits) / row_exps
45
46     relevant_probs = probs[torch.arange(len(probs)), target] # (N,C) --> (N, )
47     loss = -1 * torch.sum(torch.log(relevant_probs)) / len(logits)
48     return loss
49
50
51 def get_accuracy_and_avg_loss(model, data_loader, device):
52     # set model to eval
```

### Visual Description
A code editor view showing lines 1 through 52 of a Python script named `q1_mnist.py`. The code includes imports, seed initialization, a `WarmupNN` class definition, and a custom `cross_entropy_loss` function.

---

## Page 4
### Content
```python
53     model.eval()
54     # TODO: Implement the function to calculate accuracy and average loss
55     # Note: use the torch.no_grad() to create a context where grads of the operations aren't kept track of
56 
57     total_loss = 0
58     num_batches = 0
59
60     total_data = 0
61     total_correct = 0
62 
63     for inputs, labels in data_loader:
64
65         """
66         logits = model(inputs) # (B, num_classes)
67         optimizer.zero_grad()
68         loss = cross_entropy_loss(logits, labels)
69         loss.backward()
70         optimizer.step()
71
72         # compute accuracy
73         max_vals, max_indices = torch.max(logits, dim=1) 
74         num_correct = torch.sum((max_indices == labels).to(torch.int8)).item()
75
76         tot_correct += num_correct
77         tot_data += len(inputs)
78
79         tot_batch_loss += loss.item()
80         tot_num_batches += 1
81
82         """
83
84         with torch.no_grad():
85             inputs = inputs.to(device)
86             labels = labels.to(device)
87
88             logits = model(inputs)
89             loss = cross_entropy_loss(logits, labels)
90
91             _, max_indices = torch.max(logits, dim=1)
92             num_correct = torch.sum(max_indices == labels).item()
93
94             # increment accumulators
95             total_loss += loss.item() * len(inputs)
96             total_correct += num_correct
97
98             total_data += len(inputs)
99             num_batches += 1
100 
101     avg_loss = total_loss / total_data
102     avg_acc = total_correct / total_data
103     return avg_acc, avg_loss
104
105
106 if __name__ == '__main__':
107 
108     # Load the MNIST dataset
```

### Visual Description
A code editor view showing lines 53 through 108 of the Python script `q1_mnist.py`. It contains the implementation of the `get_accuracy_and_avg_loss` function and the beginning of the main execution block.

---

## Page 5
### Content
```python
109     # TODO: fill out the transform
110     # Hint: Lookup torchvision.transforms documentation 
111     transform = transforms.Compose([
112         transforms.ToTensor(),
113         transforms.Normalize((0.5,), (0.5,))
114     ])
115     train_dataset = datasets.MNIST('./data', train=True, download=True, transform=transform)
116     test_dataset = datasets.MNIST('./data', train=False, download=True, transform=transform)
117 
118     # Create the data loaders
119     batch_size = 256
120     train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
121     test_loader = DataLoader(test_dataset, batch_size=batch_size, shuffle=False)
122 
123     # Assign the device to be used for the compute
124     device = 'cuda' if torch.cuda.is_available() else 'cpu'
125 
126     # Create the model
127     model = WarmupNN().to(device)
128
129     LEARNING_RATE = 4e-3
130     optimizer = optim.SGD(model.parameters(), lr = LEARNING_RATE)
131 
132     # Train the model
133     num_epochs = 10
134     tr_loss_trajectory = []
135     tr_acc_trajectory = []
136     te_loss_trajectory = []
137     te_acc_trajectory = []
138 
139     # Loop over the epochs
140     for epoch in range(num_epochs):
141         # set model to train
142         model.train()
143
144         # Define variables to compute the average batch loss + accuracy for the train dataset
145         tot_num_batches = 0
146         tot_data = 0
147         tot_batch_loss = 0
148         tot_correct = 0
149 
150         # Iterate over the loader
151         for inputs, labels in tqdm(train_loader):
152 
153             # Shift to the gpu
154             inputs, labels = inputs.to(device), labels.to(device)
155
156             logits = model(inputs) # (B, num_classes)
157             optimizer.zero_grad()
158             loss = cross_entropy_loss(logits, labels)
159             loss.backward()
160             optimizer.step()
161
162             # compute accuracy
163             max_vals, max_indices = torch.max(logits, dim=1) 
164             num_correct = torch.sum(max_indices == labels).item()
```

### Visual Description
A code editor view showing lines 109 through 164 of the Python script `q1_mnist.py`. This section handles data loading, model initialization, and the start of the training loop.

---

## Page 6
### Content
```python
165
166         tot_correct += num_correct
167         tot_data += len(inputs)
168
169         tot_batch_loss += loss.item() * len(inputs)
170         tot_num_batches += 1
171
172 
173     # Compute the average batch loss + accuracy for the train dataset
174     print(f"tot_batch_loss: {tot_batch_loss}")
175     print(f"tot_num_batches: {tot_num_batches}")
176     print(f"avg_batch_loss: {tot_batch_loss}")
177     print(f"avg_batch_acc: {tot_correct}")
178     print(f"tot_data: {tot_data}")
179
180     avg_batch_loss = tot_batch_loss / tot_data
181     avg_batch_acc = tot_correct / tot_data
182     print(f'Epoch {epoch+1} Loss: {avg_batch_loss} Acc: {avg_batch_acc}')
183 
184     tr_loss_trajectory.append(avg_batch_loss)
185     tr_acc_trajectory.append(avg_batch_acc)
186
187     # calculate test loss
188     test_acc, test_loss = get_accuracy_and_avg_loss(model, test_loader, device)
189     print(f'Epoch {epoch+1} Test Loss: {test_loss} Acc: {test_acc}')
190
191     te_loss_trajectory.append(test_loss)
192     te_acc_trajectory.append(test_acc)
193 
194     # TODO: Save the trajectories (with learning rate in name) (so as to be plotted later)
195     with open(f'tr_loss_trajectory_{LEARNING_RATE}.pkl', 'wb') as f:
196         pickle.dump(tr_loss_trajectory, f)
197     with open(f'tr_acc_trajectory_{LEARNING_RATE}.pkl', 'wb') as f:
198         pickle.dump(tr_acc_trajectory, f)
199     with open(f'te_loss_trajectory_{LEARNING_RATE}.pkl', 'wb') as f:
200         pickle.dump(te_loss_trajectory, f)
201     with open(f'te_acc_trajectory_{LEARNING_RATE}.pkl', 'wb') as f:
202         pickle.dump(te_acc_trajectory, f)
203
```

### Visual Description
A code editor view showing lines 165 through 203 of the Python script `q1_mnist.py`. This section completes the training loop, prints metrics, and saves the training/testing trajectories to pickle files.

---

## Page 7
### Content
**q2_cifar10.py**  Download

```python
1 import torch
2 import torch.nn as nn
3 import torch.optim as optim
4 from torchvision import datasets, transforms
5 from torch.utils.data import DataLoader
6 import numpy as np
7 from tqdm import tqdm
8
9 RANDOM_SEED = 42
10 torch.manual_seed(RANDOM_SEED)
11 np.random.seed(RANDOM_SEED)
12
13 class DropoutLayer(nn.Module):
14     def __init__(self, dropout_rate):
15         super(DropoutLayer, self).__init__()
16         if dropout_rate is None:
17             dropout_rate = 0
18
19         self.p = dropout_rate
20
21     def forward(self, x):
22         if self.training:
23             x_shape = x.size()
24             mask = torch.rand(x_shape, device=x.device) >= self.p
25             mask = mask.to(torch.int64)
26             x = x * mask
27             x = x / (1-self.p)
28             return x
29
30         else: # activations remain untouched if we're not in training mode
31             return x
32
33
34 # Q2: Implementing a Dropout CNN
35 class CNNModel(nn.Module):
36     def __init__(self, dropout_rate):
37         super(CNNModel, self).__init__()
38
39         # TODO: create a network as per the provided specification
40         # Hint: Lookup nn.Conv2d, nn.MaxPool2d, and look at the dataset/dataloader to figure out the dimensions
41         # Use the DropoutLayer module implemented by us
42
43         self.conv1 = nn.Conv2d(3, 64, kernel_size=3, padding=1)
44         self.conv2 = nn.Conv2d(64, 128, kernel_size=3, padding=1)
45         self.conv3 = nn.Conv2d(128, 128, kernel_size=3, padding=1)
46
47         self.maxpool = nn.MaxPool2d(kernel_size=2, stride=2)
48         self.relu = nn.ReLU()
49
50         self.fc1 = nn.Linear(128 * 4 * 4, 512)
51         self.dropout = DropoutLayer(dropout_rate)
52         self.fc2 = nn.Linear(512, 10)
```

### Visual Description
A code editor view showing lines 1 through 52 of a Python script named `q2_cifar10.py`. It includes imports, a custom `DropoutLayer` class, and the initialization of a `CNNModel` class.

---

## Page 8
### Content
```python
53 
54     def forward(self, x):
55         x = self.conv1(x)
56         x = self.relu(x)
57         x = self.maxpool(x)
58         x = self.conv2(x)
59         x = self.relu(x)
60         x = self.maxpool(x)
61         x = self.conv3(x)
62         x = self.relu(x)
63         x = self.maxpool(x)
64         x = x.view(-1, 128 * 4 * 4)
65         x = self.fc1(x)
66         x = self.relu(x)
67         x = self.dropout(x)
68         x = self.fc2(x)
69         return x
70
71
72 def get_accuracy_and_avg_loss(model, data_loader, device, criterion):
73     # set model to eval
74     model.eval()
75     total_data = 0
76     total_loss = 0
77     total_correct = 0
78
79     for input, label in data_loader:
80
81         with torch.no_grad():
82             input = input.to(device)
83             label = label.to(device)
84
85             logits = model(input)
86             loss = criterion(logits, label).item()
87             num_data = len(input)
88
89             _, max_indices = torch.max(logits, dim=1)
90             num_correct = torch.sum(max_indices == label).item()
91
92             total_data += num_data
93             total_loss += loss * num_data
94             total_correct += num_correct
95
96     return total_correct/total_data, total_loss/total_data
97
98
99 if __name__ == '__main__':
100 
101     # Load the CIFAR10 dataset 
102     # TODO: fill out the transform
103     transform = transforms.Compose([
104         transforms.ToTensor(),
105         transforms.Normalize((0.5,0.5,0.5), (0.5,0.5,0.5))
106     ])
107     train_dataset = datasets.CIFAR10(root='./data', train=True, download=True, transform=transform)
108     test_dataset = datasets.CIFAR10(root='./data', train=False, download=True, transform=transform)
```

### Visual Description
A code editor view showing lines 53 through 108 of the Python script `q2_cifar10.py`. It contains the `forward` method for `CNNModel`, the `get_accuracy_and_avg_loss` function, and the start of the main block for CIFAR10 data loading.
## Page 9
### Content
```python
109
110 # Create the data loaders
111 batch_size = 128 
112 train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
113 test_loader = DataLoader(test_dataset, batch_size=batch_size, shuffle=True)
114 
115 # Assign the device to be used for the compute
116 device = 'cuda' if torch.cuda.is_available() else 'cpu'
117 
118 # Create the model
119 dropout_rate = None
120 model = CNNModel(dropout_rate).to(device)
121
122 # TODO: define loss function and optimizer
123 # You may use the standard PyTorch module for the loss function here. 
124 # Implementation from scratch is required only in Q1 of the homework.
125 criterion = nn.CrossEntropyLoss()
126 weight_decay = 0
127 optimizer = optim.SGD(model.parameters(), lr=0.01, momentum=0.9, weight_decay=weight_decay)
128 
129 # Train the model
130 num_epochs = 20
131 tr_loss_trajectory = []
132 tr_acc_trajectory = []
133 te_loss_trajectory = []
134 te_acc_trajectory = []
135 
136 # Loop over the epochs
137 for epoch in range(num_epochs):
138     # set model to train
139     model.train()
140
141     # Define variables to compute the average batch loss + accuracy for the train dataset
142     tot_num_batches = 0
143     tot_data = 0
144     tot_loss = 0
145     tot_correct = 0
146 
147     # Iterate over the loader
148     for inputs, labels in tqdm(train_loader):
149 
150         # Shift to the gpu
151         inputs, labels = inputs.to(device), labels.to(device)
152
153         logits = model(inputs)
154         optimizer.zero_grad()
155         loss = criterion(logits, labels)
156         loss.backward()
157         optimizer.step()
158
159         tot_loss += loss.item() * len(inputs)
160         tot_data += len(inputs)
161
162         _, max_indices = torch.max(logits, dim=1)
163         num_correct = torch.sum(max_indices == labels).item()
164         tot_correct += num_correct
```

### Visual Description
Text-only slide.

---
## Page 10
### Content
```python
165 
166     # Compute the average batch loss + accuracy for the train dataset
167     avg_batch_loss = tot_loss / tot_data
168     avg_batch_acc = tot_correct / tot_data
169     print(f'Epoch {epoch+1} Loss: {avg_batch_loss} Acc: {avg_batch_acc}')
170 
171     # Compute the average batch loss + accuracy for the test dataset
172     avg_te_acc, avg_te_batch_loss = get_accuracy_and_avg_loss(model, test_loader, device, criterion)
173     print(f'Epoch {epoch+1} Test Loss: {avg_te_batch_loss} Acc: {avg_te_acc}')
174 
175     # TODO: Modify the trajectories 
176     tr_loss_trajectory.append(avg_batch_loss)
177     tr_acc_trajectory.append(avg_batch_acc)
178
179     te_loss_trajectory.append(avg_te_batch_loss)
180     te_acc_trajectory.append(avg_te_acc)
181 
182 # TODO: Save the trajectories (so as to be plotted later)
183 # # TODO: Save the trajectories (with learning rate in name) (so as to be plotted later)
184 # with open(f'tr_loss_trajectory_{LEARNING_RATE}.pkl', 'wb') as f:
185 #     pickle.dump(tr_loss_trajectory, f)
186 # with open(f'tr_acc_trajectory_{LEARNING_RATE}.pkl', 'wb') as f:
187 #     pickle.dump(tr_acc_trajectory, f)
188 # with open(f'te_loss_trajectory_{LEARNING_RATE}.pkl', 'wb') as f:
189 #     pickle.dump(te_loss_trajectory, f)
190 # with open(f'te_acc_trajectory_{LEARNING_RATE}.pkl', 'wb') as f:
191 #     pickle.dump(te_acc_trajectory, f)
192
193
```

### Visual Description
Text-only slide.
