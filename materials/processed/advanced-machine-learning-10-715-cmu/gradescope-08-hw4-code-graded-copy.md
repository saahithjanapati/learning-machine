# gradescope-08-hw4-code-graded-copy

Source: `materials/archive/advanced-machine-learning-10-715-cmu/gradescope-graded-copies/gradescope-08-hw4-code-graded-copy.pdf`
Duplicate equivalents: `gradescope-08-hw4-code-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `STOP`
Pages: 8

## Page 1
### Content
# HW4 Code
**Graded**
2 Days, 19 Hours Late

**Student**
Saahith Janapati

**Total Points**
20 / 20 pts

**Autograder Score**
20.0 / 20.0

**Passed Tests**
* 1.d.a) Evaluate ResNet initialization (10/10)
* 1.d.b/c) Evaluate metrics (10/10)
### Visual Description
Text-only slide.

---

## Page 2
### Content
# Autograder Results
* 1.d.a) Evaluate ResNet initialization (10/10)
* 1.d.b/c) Evaluate metrics (10/10)

# Submitted Files
### Visual Description
Text-only slide.

---

## Page 3
### Content
**q1_resnet.py**

```python
1 import torch
2 import torch.nn as nn
3 import torch.optim as optim
4 from torchvision import datasets, transforms
5 from torch.utils.data import DataLoader
6 from sklearn.metrics import precision_score, recall_score, f1_score
7 import numpy as np
8 from tqdm import tqdm
9
10 RANDOM_SEED = 12345
11 torch.manual_seed(RANDOM_SEED)
12 np.random.seed(RANDOM_SEED)
13
14 class ResNetBlock(nn.Module):
15
16  def __init__(self, in_channels, out_channels, stride=1, downsample=None):
17      super(ResNetBlock, self).__init__()
18      # create the ResNetBlock as per the provided specification (use padding=1, bias=False for conv)
19      # Hint: Lookup nn.Conv2d, nn.BatchNorm2d, and nn.ReLU
20      self.conv1 = nn.Conv2d(
21          in_channels,
22          out_channels,
23          kernel_size=3,
24          stride=stride,
25          padding=1,
26          bias=False,
27      )
28      self.bn1 = nn.BatchNorm2d(out_channels)
29      self.relu = nn.ReLU(inplace=True)
30      self.conv2 = nn.Conv2d(
31          out_channels,
32          out_channels,
33          kernel_size=3,
34          stride=1,
35          padding=1,
36          bias=False,
37      )
38      self.bn2 = nn.BatchNorm2d(out_channels)
39      self.downsample = downsample 
40
41  def forward(self, x):
42      identity = x
43      out = self.conv1(x)
44      out = self.bn1(out)
45      out = self.relu(out)
46      out = self.conv2(out)
47      out = self.bn2(out)
48 
49 
50      # keep this as is
51      if self.downsample is not None:
52          identity = self.downsample(x)
53 
```
### Visual Description
Text-only slide.

---

## Page 4
### Content
```python
54      out += identity
55      out = self.relu(out)
56      return out
57
58 class ResNet(nn.Module):
59  def __init__(self, layers, num_classes=10):
60      super(ResNet, self).__init__()
61 
62      # layer A
63      self.layerA = nn.Sequential(
64          nn.Conv2d(
65              in_channels = 3,
66              out_channels = 64,
67              kernel_size = 7,
68              stride = 2,
69              padding = 3,
70              bias = False
71          ),
72          nn.BatchNorm2d(64),
73          nn.ReLU(inplace=True),
74          nn.MaxPool2d(kernel_size = 3, stride = 2, padding=1)
75      )
76
77      # layer B
78      self.layerB = self.make_resnet_layer(in_channels=64, out_channels=64, blocks=layers[0], stride=1)
79 
80      # layer C
81      self.layerC = self.make_resnet_layer(in_channels=64, out_channels=128, blocks=layers[1], stride=2)
82 
83      # layer D
84      self.layerD = self.make_resnet_layer(in_channels=128, out_channels=256, blocks=layers[2], stride=2)
85 
86      # layer E
87      self.layerE = self.make_resnet_layer(in_channels=256, out_channels=512, blocks=layers[3], stride=2)
88 
89      # final pooling
90      self.avgpool = nn.AdaptiveAvgPool2d((1, 1))
91      self.fc = nn.Linear(512, num_classes)
92
93
94  def make_resnet_layer(self, in_channels, out_channels, blocks, stride):
95      downsample = None
96 
97      if stride != 1 or in_channels != out_channels:
98          # i.e. the dimensions of F(x) and x are different, i.e. skip connection can't be a simple addition
99          # fill the downsample with the apt convolution and batchnorm
100         # Hint: lookup nn.Sequential
101         downsample = nn.Sequential(
102             nn.Conv2d(
103                 in_channels,
104                 out_channels,
105                 kernel_size=1,
106                 stride=stride,
107                 bias=False,
```
### Visual Description
Text-only slide.

---

## Page 5
### Content
```python
108         ),
109         nn.BatchNorm2d(out_channels),
110     )
111 
112     resnet_blocks_list = [] # list of ResNetBlock blocks that comprise this layer
113 
114     # consider the first block (special case because it could have stride, downsample)
115     resnet_blocks_list.append(
116         ResNetBlock(
117             in_channels=in_channels,
118             out_channels=out_channels,
119             stride=stride,
120             downsample=downsample,
121         )
122     )
123 
124     # initialise and append the correct ResNetBlock based on the provided specification
125     for _ in range(1, blocks):
126         resnet_blocks_list.append(
127             ResNetBlock(
128                 in_channels=out_channels,
129                 out_channels=out_channels,
130                 stride=1,
131                 downsample=None,
132             )
133         )
134 
135     return nn.Sequential(*resnet_blocks_list)
136
137 def forward(self, x):
138     out = self.layerA(x)
139     out = self.layerB(out)
140     out = self.layerC(out)
141     out = self.layerD(out)
142     out = self.layerE(out)
143     out = self.avgpool(out)
144     out = torch.flatten(out, 1)
145     out = self.fc(out)
146     return out
147
148
149 def resnet18(num_classes=10):
150     return ResNet([2, 2, 2, 2], num_classes)
151
152
153 def get_metrics(model, data_loader, device, criterion):
154     # set model to eval
155     model.eval()
156     # Implement the function to calculate accuracy, average batch loss, precision, recall, and f1 score
157     # Note: Use precision_score, recall_score, f1_score functions from sklearn.metrics to calculate metrics
158     # https://scikit-learn.org/1.5/modules/generated/sklearn.metrics.f1_score.html
159     # set average='weighted' for the sklearn functions
160     # Note: use the torch.no_grad() to create a context where grads of the operations aren't kept track of
161     # Return: (accuracy, avg_batch_loss, f1_score, precision, recall)
162     total_loss = 0.0
```
### Visual Description
Text-only slide.

---

## Page 6
### Content
```python
163 total_correct = 0
164 total_examples = 0
165 all_preds = []
166 all_targets = []
167
168 with torch.no_grad():
169     for inputs, labels in data_loader:
170         inputs, labels = inputs.to(device), labels.to(device)
171         outputs = model(inputs)
172         loss = criterion(outputs, labels)
173
174         preds = outputs.argmax(dim=1)
175
176         total_loss += loss.item()
177         total_examples += labels.size(0)
178         total_correct += (preds == labels).sum().item()
179
180         all_preds.extend(preds.cpu().numpy())
181         all_targets.extend(labels.cpu().numpy())
182
183 accuracy = total_correct / total_examples
184 avg_batch_loss = total_loss / len(data_loader)
185 precision = precision_score(all_targets, all_preds, average='weighted', zero_division=0)
186 recall = recall_score(all_targets, all_preds, average='weighted', zero_division=0)
187 f1 = f1_score(all_targets, all_preds, average='weighted', zero_division=0)
188 return accuracy, avg_batch_loss, f1, precision, recall
189
190 if __name__ == '__main__':
191 
192     # Load the CIFAR10 dataset 
193     transform = transforms.Compose([transforms.ToTensor(), transforms.Normalize(mean=[0.4914, 0.4822, 0.4465], 
194         std=[0.2023, 0.1994, 0.2010])])
195     train_dataset = datasets.CIFAR10(root='./data', train=True, download=True, transform=transform)
196     test_dataset = datasets.CIFAR10(root='./data', train=False, download=True, transform=transform)
197
198     # Create data loaders
199     batch_size = 256
200     train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
201     test_loader = DataLoader(test_dataset, batch_size=batch_size, shuffle=False)
202 
203     # Assign the device to be used for the compute
204     device = 'cuda' if torch.cuda.is_available() else 'cpu'
205 
206     # Create the model
207     model = resnet18(num_classes=10).to(device)
208
209     # Define loss function and optimizer
210     # change momentum in the optimizer as asked
211     criterion = nn.CrossEntropyLoss()
212     optimizer = optim.SGD(model.parameters(), lr=0.01, momentum=0.9, weight_decay=0.001) 
213 
214     # Train the model
215     num_epochs = 20
216     tr_loss_trajectory = []
217     tr_acc_trajectory = []
```
### Visual Description
Text-only slide.

---

## Page 7
### Content
```python
218 te_loss_trajectory = []
219 te_acc_trajectory = []
220 
221 # Loop over the epochs
222 for epoch in range(num_epochs):
223     # set model to train
224     model.train()
225
226     # Define variables to compute the average batch loss + accuracy for the train dataset
227     tot_num_batches = 0
228     tot_data = 0
229     tot_batch_loss = 0
230     tot_correct = 0
231 
232     # Iterate over the loader
233     for inputs, labels in tqdm(train_loader):
234 
235         # Shift to the gpu
236         inputs, labels = inputs.to(device), labels.to(device)
237 
238         # fill in missing code here to complete the training logic
239         # Note: remember to update the accumulator variables
240         optimizer.zero_grad()
241         outputs = model(inputs)
242         loss = criterion(outputs, labels)
243         loss.backward()
244         optimizer.step()
245
246         preds = outputs.argmax(dim=1)
247         tot_batch_loss += loss.item()
248         tot_correct += (preds == labels).sum().item()
249         tot_data += labels.size(0)
250         tot_num_batches += 1
251 
252     # Compute the average batch loss + accuracy for the train dataset
253     avg_batch_loss = tot_batch_loss / tot_num_batches
254     avg_batch_acc = tot_correct / tot_data
255     print(f'Epoch {epoch+1} Loss: {avg_batch_loss} Acc: {avg_batch_acc}')
256 
257     # Compute the average batch loss + accuracy for the test dataset
258     avg_te_acc, avg_te_batch_loss, _, _, _ = get_metrics(model, test_loader, device, criterion)
259     print(f'Epoch {epoch+1} Test Loss: {avg_te_batch_loss} Acc: {avg_te_acc}') 
260     # Modify the trajectories
261     tr_loss_trajectory.append(avg_batch_loss)
262     tr_acc_trajectory.append(avg_batch_acc)
263     te_loss_trajectory.append(avg_te_batch_loss)
264     te_acc_trajectory.append(avg_te_acc)
265 
266 avg_te_acc, avg_te_batch_loss, precision, recall, f1_score = get_metrics(model, test_loader, device, criterion)
267 print(f'Test Loss: {avg_te_batch_loss} Acc: {avg_te_acc} Precision: {precision} Recall: {recall} F1 Score: {f1_score}')
268 # Save the trajectories (so as to be plotted later)
269 np.savez(
270     'training_trajectories.npz',
271     train_loss=np.array(tr_loss_trajectory),
```
### Visual Description
Text-only slide.

---

## Page 8
### Content
```python
272     train_acc=np.array(tr_acc_trajectory),
273     test_loss=np.array(te_loss_trajectory),
274     test_acc=np.array(te_acc_trajectory),
275 )
276 
277
```
### Visual Description
Text-only slide.

---
