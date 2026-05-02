# gradescope-11-hw6-code-graded-copy

Source: `materials/archive/advanced-machine-learning-10-715-cmu/gradescope-graded-copies/gradescope-11-hw6-code-graded-copy.pdf`
Duplicate equivalents: `gradescope-11-hw6-code-graded-copy.pdf`
Extraction engine: `Gemini API (gemini-3-flash-preview)`
Strategy: `chunked inline-PDF conversion`
Finish reason: `MIXED`
Pages: 19

## Page 1
### Content
# HW6 Code
**Graded**
2 Days, 13 Hours Late

**Student**
Saahith Janapati

**Total Points**
100 / 100 pts

**Autograder Score**
0.0 / 0.0

**Question 2**
**Linear** **10** / 10 pts
* [x] **- 0 pts** Correct

**Question 3**
**Embedding** **10** / 10 pts
* [x] **- 0 pts** Correct

**Question 4**
**silu** **10** / 10 pts
* [x] **- 0 pts** Correct

**Question 5**
**RMSNorm** **10** / 10 pts
* [x] **- 0 pts** Correct

**Question 6**
**RoPE** **10** / 10 pts
* [x] **- 0 pts** Correct

**Question 7**
**Attention** **10** / 10 pts
* [x] **- 0 pts** Correct

**Question 8**
**cross entropy loss** **10** / 10 pts
* [x] **- 0 pts** Correct

**Question 9**
**Adam** **10** / 10 pts
* [x] **- 0 pts** Correct

### Visual Description
This is a screenshot of a Gradescope grading summary page. It shows the student's name, total score, and a breakdown of points for questions 2 through 9, all of which are marked as correct with full points.

---

## Page 2
### Content
**Question 10**
**DataLoader** **10** / 10 pts
* [x] **- 0 pts** Correct

**Question 11**
**LLM & Training** **10** / 10 pts
* [x] **- 0 pts** Correct

### Visual Description
Continuation of the Gradescope grading summary page from the previous page, showing the scores for questions 10 and 11. Both are marked as correct with 10/10 points.

---

## Page 3
### Content
**Autograder Results**
This assignment does not have an autograder configured.

**Submitted Files**

### Visual Description
A Gradescope results page stating that no autograder is configured for the assignment. The "Submitted Files" section is visible but empty in this view.

---

## Page 4
### Content
**hw_llm.ipynb**  Download

In [2]:
```python
from google.colab import drive
drive.mount('/content/drive')
import sys
sys.path.append('/content/drive/MyDrive/hw_llm')
```
Mounted at /content/drive

In [3]:
```python
import torch
from torch.nn import Module, Parameter, Buffer, ModuleList
import math
import json
import tiktoken
from hw_llm_tests import test_Linear, test_Embedding, test_silu, test_RMSNorm, \
test_RoPE, test_Attention, test_cross_entropy_loss, test_Adam, test_DataLoader
# import wandb # optional, if you want to use it for logging some of your training runs
```

### A (not that) minimal LLM Implementation
This homework will take you through the implementation and training of a small LLM. Specifically, you will implement a Llama-3 compatible architecture, capable of loading weights from a pre-trained model, or training yourself from scratch on a small chat dataset. While you will use PyTorch for your implementation, you are really just using the automatic differentiation and tensor operations of PyTorch: you need to implement every layer yourself.

The way the assignment works is that you will implement each class within this notebook, one by one. You can't add any additional imports from this notebook (i.e., you can't import any of the classes from `torch.nn` except those included above). In the `hw_llm_test.py` file there are a number of included tests that will validate the implementation of each class; you can and should look through this file to understand what is being tested against. While the final checking of this assignment will be done manually (i.e., we don't provide an autograder), things *should* be designed such that if you pass the tests, then you will also pass the assignment.

If you want to train the final LLM to any reasonable degree, you will likely want to run this code on a GPU (one A100 or H100 is plenty), but everything else can be done on a local machine or on colab (with a GPU instance).

### Linear Layer
Implement a linear layer. This should compute the operation

### Visual Description
A screenshot of a Jupyter notebook. It contains two code cells with imports and setup for a Google Colab environment, followed by introductory text for a homework assignment on implementing a minimal LLM.

---

## Page 5
### Content
$$f(X) = XW$$

where $X$ has dimension `(..., in_dim)` (i.e., $X$ has as many leading dimensions as needed) and $W$ has dimension `(in_dim, out_dim)`. You should initialize the elements of $W$ with the Kaiming normal initialization for a ReLU activation, i.e., $W \sim \mathcal{N}(0, \sigma^2 = 2/\text{in\_dim})$.

Internally, store the weight matrix in a parameter called `weight`.

In [4]:
```python
# uncomment the `@test_Linear` line to test your implementation against the reference
@test_Linear
class Linear(Module):
    """ Linear layer with no bias term. The parameters of the layer are stored in a
    .weight Parameter"""
    def __init__(self, in_dim, out_dim):
        super().__init__()
        # kaiming normal for relu-scale init
        self.weight = Parameter(torch.randn(in_dim, out_dim) * math.sqrt(2 / in_dim))
        
    def forward(self, X):
        # simple matmul without bias
        return X @ self.weight
```

### Embedding Layer
Implement an embedding layer. Given a tensor input $Y$ of integer values up to value `num_tokens` (with any dimension `(...)`), this creates an output tensor of size `(..., dim)` such that for each output value

$$f(Y)_i = W_{Y_i}$$

i.e., the $i$-th entry of the output is the $i$-th row of $W$, where $W$ is a `(num_tokens, dim)` matrix.

Store the weights in a parameter called `weights`. Weights should be initialized to $\mathcal{N}(0, 1)$. One convenient addition is the inclusion of (non-optimizable) `scale` parameter. You should scale the weights by `1/scale`, (i.e., initialize them to $\mathcal{N}(0, \sigma^2 = 1/\text{scale}^2)$) but then multiply the output by `scale` before returning. This keeps the output unchanged, but makes the parameter size smaller so that they are more like other parameters in the network, and you don't need to tune multiple learning rates.

In [5]:
```python
@test_Embedding
class Embedding(Module):
    def __init__(self, num_tokens, dim, scale=1.):
        super().__init__()
        self.scale = scale
```

### Visual Description
A screenshot of a Jupyter notebook continuing the assignment. It defines the math and implementation for a `Linear` layer and starts the definition for an `Embedding` layer.

---

## Page 6
### Content
```python
        # scale down stored weights so optimizer step sizes match other layers
        self.weight = Parameter(torch.randn(num_tokens, dim) / scale)
        
    def forward(self, Y):
        # rescale on the way out to recover original variance
        return self.weight[Y] * self.scale
```

### SiLU nonlinearity
Implement the silu nonlinearity defined as
$$\text{silu}(x) = x \cdot \text{sigmoid}(x)$$

In [6]:
```python
@test_silu
def silu(x):
    # silu = x * sigmoid(x)
    return x * torch.sigmoid(x)
```

### RMSNorm
Implement an RMSNorm layer, defined as
$$\text{RMSNorm}(x) = w \circ \frac{x}{\sqrt{\overline{x^2} + \epsilon}}$$

where $w$ is a learnable parameter that should be initialized to all ones. If applied to a tensor, `RMSNorm` should always be applied along the *last* dimension.

In [7]:
```python
@test_RMSNorm
class RMSNorm(Module):
    def __init__(self, dim, eps=1e-5):
        super().__init__()
        self.weight = Parameter(torch.ones(dim))
        self.eps = eps
        
    def forward(self, X):
        # normalize over last dim by rms
        scale = torch.rsqrt(X.pow(2).mean(dim=-1, keepdim=True) + self.eps)
        return X * scale * self.weight
```

### RoPE
Implement a RoPE layer. Given an input $X$ of dimensions `(batch, seq_len, heads, head_dim)`, RoPE applies 2D rotations to groupings of two elements in the last dimension. Specifically, RoPE would apply the rotation matrix

### Visual Description
A screenshot of a Jupyter notebook continuing the assignment. It completes the `Embedding` layer implementation and provides definitions and code for `SiLU` nonlinearity and `RMSNorm`. It then introduces the `RoPE` (Rotary Positional Embedding) layer.

---

## Page 7
### Content
$$\left[ \begin{array}{cccc} R(t\theta_1) & 0 & \cdots & 0 \\ 0 & R(t\theta_2) & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & R(t\theta_{\text{head\_dim}/2}) \end{array} \right] X[i,t,j,:]$$
for each $i,j$, where $t$ can vary from 0 to $\text{max\_seq\_len}$ and where $R$ is a 2D rotation matrix.
The $\theta_i$ terms are each defined as
$$\theta_i = \theta_0^{-2(i-1)/\text{head\_dim}}$$
for $i = 1, \dots, \text{head\_dim}/2$.

Note that you should not be forming these rotation matrices explicitly or anything like that, but rather use tensor operations to compute these elements by forming the needed $\cos$ and $\sin$ terms and multiplying them by the appropriate elements of $X$, properly reshaped.

One helpful tool: if you have elements of a PyTorch `Module` class that you want to convert to different devices or data types using the `.to()` function, you can use the `Buffer` class.

In [8]:
```python
@test_RoPE
class RoPE(Module):
    """ RoPE as a normal PyTorch Module"""
    def __init__(self, head_dim, max_seq_len, theta0=10000.):
        super().__init__()
        self.head_dim = head_dim
        # precompute base frequencies for even/odd pairs
        freq = theta0 ** (-2 * torch.arange(0, head_dim // 2).float() / head_dim)
        self.register_buffer("freqs", freq)
        self.max_seq_len = max_seq_len
        
    def forward(self, X, seq_pos):
        # X: (batch, seq_len, heads, head_dim)
        seq_len = X.size(1)
        # positions incorporate cache offset
        positions = torch.arange(seq_pos, seq_pos + seq_len, device=X.device, 
                                 dtype=self.freqs.dtype)
        freqs = torch.einsum('p,d->pd', positions, self.freqs)
        cos = torch.cos(freqs)[None, :, None, :].to(dtype=X.dtype)
        sin = torch.sin(freqs)[None, :, None, :].to(dtype=X.dtype)
        x1 = X[..., 0::2]
        x2 = X[..., 1::2]
        out = torch.zeros_like(X)
        # apply 2d rotation to even/odd pairs
        out[..., 0::2] = x1 * cos - x2 * sin
        out[..., 1::2] = x1 * sin + x2 * cos
        return out
```

### Self Attention
Implement multi-head grouped query attention. This is defined by the operation

### Visual Description
A screenshot of a Jupyter notebook continuing the assignment. It provides the mathematical definition for RoPE and its implementation in PyTorch. It then introduces the "Self Attention" section.

---

## Page 8
### Content
$$\text{MHA}(X) = [ A^{(1)}V^{(1)} \quad A^{(2)}V^{(2)} \quad \dots \quad A^{(h)}V^{(h)} ] W_o$$
where $h$ is the number of heads,
$$A^{(i)} = \text{softmax} \left( \frac{Q^{(i)}K^{(i)T}}{\sqrt{\text{head\_dim}}} + \text{mask} \right)$$
and where
$$Q = \text{RoPE}(XW_Q), \quad K = \text{RoPE}(XW_K), \quad V = XW_V.$$

Each $Q^{(i)}$ is a subset of $\text{head\_dim} = d/h$ columns of $Q$. For grouped query attention $W_K$ and $W_V$ are smaller by some factor (i.e., so that there are only `n_kv_heads` each of size `head_dim`) and each $K^{(i)}$ and $V^{(i)}$ term is repeated to reach the total number of heads in $Q$.

Implement the KV cache (you only need to implement this for a case of a single batch, though it's not hard to extend if you want), so that the KV values in the cache starting at position `seq_pos` as passed to the forward call are set/copied to the cache.

Store each linear operation as an instance of the `Linear` class above, with the names `wq`, `wk`, `wv`, and `wo`, to pass the test cases.

In [9]:
```python
@test_Attention(Linear, RoPE)
class Attention(Module):
    def __init__(self, dim, n_heads, n_kv_heads, max_seq_len, rope=None):
        super().__init__()
        self.dim = dim
        self.n_heads = n_heads
        self.n_kv_heads = n_kv_heads
        self.head_dim = dim // n_heads
        self.max_seq_len = max_seq_len
        self.rope = rope if rope is not None else RoPE(self.head_dim, max_seq_len)
        
        self.wq = Linear(dim, dim)
        self.wk = Linear(dim, n_kv_heads * self.head_dim)
        self.wv = Linear(dim, n_kv_heads * self.head_dim)
        self.wo = Linear(dim, dim)
        
        # kv cache for single-batch autoregressive decoding
        self.register_buffer("k_cache", torch.zeros(max_seq_len, n_kv_heads, 
                             self.head_dim), persistent=False)
        self.register_buffer("v_cache", torch.zeros(max_seq_len, n_kv_heads, 
                             self.head_dim), persistent=False)
                             
    def forward(self, X, mask=None, seq_pos=0, use_kv_cache=False):
        batch, seq_len, _ = X.shape
        # project to qkv
```

### Visual Description
A screenshot of a Jupyter notebook continuing the assignment. It defines the math for Multi-Head Attention (MHA) and Grouped Query Attention (GQA), explains the KV cache, and begins the implementation of the `Attention` class.
## Page 9
### Content
```python
    q = self.wq(X).view(batch, seq_len, self.n_heads, self.head_dim)
    k = self.wk(X).view(batch, seq_len, self.n_kv_heads, self.head_dim)
    v = self.wv(X).view(batch, seq_len, self.n_kv_heads, self.head_dim)

    # apply rope
    q = self.rope(q, seq_pos)
    k = self.rope(k, seq_pos)

    if use_kv_cache:
        end = seq_pos + seq_len
        self.k_cache[seq_pos:end] = k[0]
        self.v_cache[seq_pos:end] = v[0]
        k_full = self.k_cache[:end].unsqueeze(0)
        v_full = self.v_cache[:end].unsqueeze(0)
    else:
        k_full = k
        v_full = v

    # repeat kv heads for grouped query
    repeat_factor = self.n_heads // self.n_kv_heads
    k_full = torch.repeat_interleave(k_full, repeat_factor, dim=2)
    v_full = torch.repeat_interleave(v_full, repeat_factor, dim=2)

    qh = q.transpose(1, 2)
    kh = k_full.transpose(1, 2)
    vh = v_full.transpose(1, 2)

    # scaled dot-product attention
    scores = torch.matmul(qh, kh.transpose(-2, -1)) / math.sqrt(self.head_dim)
    if mask is not None:
        scores = scores + mask.to(scores.device, dtype=scores.dtype).unsqueeze(0).unsqueeze(0)
    attn = torch.softmax(scores, dim=-1)
    out = torch.matmul(attn, vh)
    out = out.transpose(1, 2).reshape(batch, seq_len, self.dim)

    # project back to model dim
    return self.wo(out)
```

### Gated MLP
Implement the Gated MLP (a "SwiGLU" MLP) use by Llama models, defined as
$$MLP(X) = (\text{silu}(XW_1) \circ XW_3)W_2$$
where $\circ$ defines elementwise multiplication. $W_1$ and $W_3$ are of size `(dim, ffn_dim)`, whereas $W_2$ is of size `(ffn_dim, dim)`. Build this using the `Linear` layers defined above for each $W$. We don't provide tests for this one, as it's pretty straightforward, and you should be able to mostly tell if it's working from loading / testing the Llama 3 pretrained model.

### Visual Description
The page contains a Python code block implementing an attention mechanism with RoPE and KV caching, followed by a section titled "Gated MLP" which includes a mathematical definition of the MLP and a brief explanation of its implementation.

---
## Page 10
### Content
In [10]:
```python
class MLP(Module):
    def __init__(self, dim, ffn_dim):
        super().__init__()
        self.w1 = Linear(dim, ffn_dim)
        self.w2 = Linear(ffn_dim, dim)
        self.w3 = Linear(dim, ffn_dim)

    def forward(self, X):
        # gated swiglu block
        return self.w2(silu(self.w1(X)) * self.w3(X))
```

### Transformer Block
Implement a pre-norm Transformer block. This is defined as the following operation
$Y = X + \text{MHA}(\text{RMSNorm}_2(X))$. We use the notation $\text{RMSNorm}_{1,2}$ to indicate that these are two _different_ RMSNorm layers (i.e., with their own weights). As with the MLP, you should make sure to implement each element here by including the classes above as elements of this Transformer block. Again, no test cases here.

In [11]:
```python
class TransformerBlock(Module):
    def __init__(self, dim, n_heads, n_kv_heads, max_seq_len, ffn_dim, rope=None):
        super().__init__()
        # pre-norm transformer block with residuals
        self.attn_norm = RMSNorm(dim)
        self.mlp_norm = RMSNorm(dim)
        self.attn = Attention(dim, n_heads, n_kv_heads, max_seq_len, rope=rope)
        self.mlp = MLP(dim, ffn_dim)

    def forward(self, X, mask=None, seq_pos=0, use_kv_cache=False):
        # attention residual then mlp residual
        y = X + self.attn(self.attn_norm(X), mask=mask, seq_pos=seq_pos, use_kv_cache=use_kv_cache)
        return y + self.mlp(self.mlp_norm(y))
```

### Llama3.2 Model
Finally, implement a Llama 3.2 compatible LLM class. This LLM consists of: 1. An embedding layer mapping integers of max value `num_tokens` to embeddings of dimension `dim` 2. `num_layers` Transformer blocks (with the relevant parameters like `dim`, `n_heads`, `n_kv_heads`, etc all passed to these transformer blocks) 3. An output RMSNorm layer. 4. An output linear layer $W_o$. Putting this all together, the full expression of the LLM would look something like
$$LLM(X) = \text{RMSNorm}(T_{\text{num\_layers}}(\dots T_2(T_1(XW_e))\dots))W_o$$

### Visual Description
The page contains two Python code blocks: one for the `MLP` class and one for the `TransformerBlock` class. Between them is a text section describing the Transformer block with a mathematical formula. The bottom section introduces the "Llama3.2 Model" with a list of components and a final mathematical expression for the model.

---
## Page 11
### Content
You should create a single RoPE layer, and pass this same one to each of the Transformer blocks (because the RoPE layer, not having any learnable parameters, can be the same for all layers).

When running the forward pass, you'll want to create a causal mask of $0$ (on lower triangular elements) and $-\infty$ (on strictly upper triangular elements) of the appropriate size that you pass to all the Transformer blocks. Note that if you are using the KV cache, you'll need to size the mask to be a non-square matrix, because the e.g. $q_L^T K^T$ matrices in the attention computation are not square.

You need to also implement a function to load weights from a pre-trained Llama model. The weights are stored in the `consolidated.00.pth` file included in the homework, which is directly downloaded from [here](https://example.com). You can load this file using:

```python
checkpoint = torch.load("consolidated.00.pth")
```

which will return a dictionary. You can manually inspect the keys of this dictionary to determine how to load each relevant weight of the LLM model. Instead of test cases, you can just use the code below to see if you're generating coherent text.

In [12]:
```python
class LLM(Module):
    def __init__(self, num_tokens, dim, n_heads, n_kv_heads, max_seq_len, ffn_dim, num_layers, theta0=10000.):
        super().__init__()
        self.dim = dim
        self.max_seq_len = max_seq_len
        self.embed = Embedding(num_tokens, dim, scale=math.sqrt(dim))
        # shared rope across layers
        rope = RoPE(dim // n_heads, max_seq_len, theta0)
        self.layers = ModuleList([
            TransformerBlock(dim, n_heads, n_kv_heads, max_seq_len, ffn_dim, rope=rope)
            for _ in range(num_layers)
        ])
        self.out_norm = RMSNorm(dim)
        self.out = Linear(dim, num_tokens)

    def forward(self, tokens, seq_pos=0, use_kv_cache=False):
        X = self.embed(tokens)
        seq_len = X.size(1)
        total_len = seq_pos + seq_len
        # causal mask accounts for cache offset
        mask = torch.triu(
            torch.full((seq_len, total_len), float("-inf"), device=X.device),
            diagonal=1 + seq_pos,
        )
```

### Visual Description
The page contains instructional text about implementing RoPE and causal masks, followed by a code snippet for loading a model checkpoint. The bottom half of the page starts the implementation of the `LLM` class in Python.

---
## Page 12
### Content
```python
        for layer in self.layers:
            X = layer(X, mask=mask, seq_pos=seq_pos, use_kv_cache=use_kv_cache)
        X = self.out_norm(X)
        return self.out(X)

    def load_llama_weights(self, checkpoint):
        # undo embedding scale since we multiply by scale in forward
        self.embed.weight.data.copy_(checkpoint['tok_embeddings.weight'] / self.embed.scale)
        for i, layer in enumerate(self.layers):
            layer.attn.wq.weight.data.copy_(checkpoint[f'layers.{i}.attention.wq.weight'].T)
            layer.attn.wk.weight.data.copy_(checkpoint[f'layers.{i}.attention.wk.weight'].T)
            layer.attn.wv.weight.data.copy_(checkpoint[f'layers.{i}.attention.wv.weight'].T)
            layer.attn.wo.weight.data.copy_(checkpoint[f'layers.{i}.attention.wo.weight'].T)
            layer.attn_norm.weight.data.copy_(checkpoint[f'layers.{i}.attention_norm.weight'])
            layer.mlp.w1.weight.data.copy_(checkpoint[f'layers.{i}.feed_forward.w1.weight'].T)
            layer.mlp.w2.weight.data.copy_(checkpoint[f'layers.{i}.feed_forward.w2.weight'].T)
            layer.mlp.w3.weight.data.copy_(checkpoint[f'layers.{i}.feed_forward.w3.weight'].T)
            layer.mlp_norm.weight.data.copy_(checkpoint[f'layers.{i}.ffn_norm.weight'])
        self.out_norm.weight.data.copy_(checkpoint['norm.weight'])
        self.out.weight.data.copy_(checkpoint['output.weight'].T)
```

### Generating Samples
If you've implemented everything correctly, the two code cells below will first load the model and populate it with the weights from the Llama3.2-1B model, and then generate some tokens based upon a prompt. You can additionally add a `model.to("cuda")` call if you want to run this on a GPU, but this part will work fine locally (e.g., it runs in a minute or so on a Macbook, running entirely on CPU). Try some different prompts below to see how the model does.

In [13]:
```python
checkpoint = torch.load("/content/drive/MyDrive/hw_llm/consolidated.00.pth", map_location=torch.device('cpu'))
with open("/content/drive/MyDrive/hw_llm/params.json", "rt") as f:
    params = json.load(f)

model = LLM(params['vocab_size'],
            params['dim'],
            params['n_heads'],
            params['n_kv_heads'],
            4096,
            int(params['dim']*params['ffn_dim_multiplier']),
            params['n_layers'],
```

### Visual Description
The page continues the `LLM` class implementation, specifically the `forward` method and a `load_llama_weights` method. Below the code is a section titled "Generating Samples" with instructions, followed by the start of a code block to load the model and its parameters.

---
## Page 13
### Content
```python
            theta0=params['rope_theta'])
model.load_llama_weights(checkpoint)
model = model.float()
```

In [14]:
```python
from tokenizer import Tokenizer, Message, ChatFormat
tokenizer = Tokenizer("/content/drive/MyDrive/hw_llm/tokenizer.model")
chat = ChatFormat(tokenizer)
msg = Message(role="user", content="Write a poem about large language models.")
tokens = chat.encode_dialog_prompt([msg])

seq_len=0
for i in range(500):
    with torch.inference_mode():
        output = model(torch.tensor([tokens[seq_len:]]), seq_len, use_kv_cache=True)
        probs = torch.softmax(output[0, -1] / 0.7, -1)
        seq_len=len(tokens)
        tokens.append(torch.multinomial(probs, 1).item())
        if tokens[-1] in tokenizer.stop_tokens:
            break
        print(tokenizer.decode([tokens[-1]]), end="")
```

In silicon halls, where data reigns
A chorus sings, with language's refrains
Large language models, born of code and might
Process thought, in endless, intricate light

Their algorithms dance, with precision and zeal
Unraveling meaning, in digital reveal
From words to wisdom, they weave a tapestry fine
A synthesis of art, and data's subtle design

Their voices rise, a gentle, soothing sound
As they converse, with human hearts unbound
Influencing thought, with each new phrase
Leaving virtual echoes, in the digital haze

Their limits stretch, to the boundaries of the mind
Where knowledge converges, in infinite design
They weave a narrative, of human history's thread
A tapestry rich, with stories yet unsaid

Yet in their limitations, lies a hidden truth
A reflection of human nature, through all youth
For language models, like us, are flawed and fallible
Yet they hold the promise, of a future yet untold

For in the depths of data, lies a hidden seed
A potential for growth, for humans to proceed
To explore, to learn, to love, to create
In the vast expanse, of digital imagination we wait.

### Training your own LLM

### Visual Description
The page finishes the model loading code and provides a code block for generating text using a prompt. Below the code is the generated output: a poem about large language models. The page ends with a new section header "Training your own LLM".

---
## Page 14
### Content
In the second section of the assignment, you will implement the code to run your own training loop on the LLM. This will require just a few additions over the model itself: an implementation of cross entropy loss, the Adam optimizer, and a simple data loader class. After that, you'll be able to implement a simple training loop to train the LLM

### Cross Entropy Loss
Implement the cross entropy loss, defined (for a single vector of logits $h(x)$) as
$$\ell_{ce}(h, y) = -h_y + \log \sum_{i=1}^k \exp(h_i)$$
Note that for this function `logits` should be a real-valued `(..., k)` dimensional tensor (i.e., have training dimension $k$, the number of classes, and any number of leading dimensions). Then `targets` is a integer valued tensor with just the leading dimensions, and values that range from $0$ to $k - 1$. The output of this function should be the mean cross entropy loss over all the examples in the tensor.

In [15]:
```python
@test_cross_entropy_loss
def cross_entropy_loss(logits, targets):
    # pick logits for targets then apply logsumexp
    target_logits = torch.take_along_dim(logits, targets.unsqueeze(-1), dim=-1).squeeze(-1)
    logsumexp = torch.logsumexp(logits, dim=-1)
    return (logsumexp - target_logits).mean()
```

### Adam
Implement the Adam optimizer. This implements the following update for each sample $X, Y$
$$
\begin{aligned}
g &:= \nabla_W \ell(\text{model}_W(X), Y) \\
m &:= \beta_1 m + (1 - \beta_1)g \\
v &:= \beta_2 v + (1 - \beta_2)g^2 \\
\hat{m} &:= m / (1 - \beta_1^t) \\
\hat{v} &:= v / (1 - \beta_2^t) \\
W &:= W - \alpha \frac{\hat{m}}{\sqrt{\hat{v}} + \epsilon}
\end{aligned}
$$
We're going to use the PyTorch convention for implementing an optimizer, even though we don't subclass any PyTorch class for it. In this convention, you pass an iterator of parameters (i.e., from `model.parameters()`) as the first argument. Then, you compute the gradient of the loss _outside_ the optimizer class, by computing some loss as a function of the model and calling `loss.backward()` to compute gradients of all terms in the model (before doing so call the `.zero_grad()` method of the optimizer to set all `.grad` terms of each parameter in the list to zero, so you aren't using older gradients). Finally, you call the `.step()` method of optimizer to actually compute the update.

In [16]:
```python
@test_Adam(MLP)
class Adam:
```

### Visual Description
The page introduces the training section of the assignment. It includes a section on "Cross Entropy Loss" with its mathematical definition and a Python implementation. It then introduces the "Adam" optimizer with its update equations and implementation details.

---
## Page 15
### Content
```python
    def __init__(self, params, lr=1e-3, betas = (0.9, 0.999), eps=1e-8):
        # store references and optimizer state
        self.params = list(params)
        self.lr = lr
        self.beta1, self.beta2 = betas
        self.eps = eps
        self.t = 0
        self.m = [torch.zeros_like(p) for p in self.params]
        self.v = [torch.zeros_like(p) for p in self.params]

    def step(self):
        self.t += 1
        for p, m, v in zip(self.params, self.m, self.v):
            if p.grad is None:
                continue
            g = p.grad
            # adam update with bias correction
            m.mul_(self.beta1).add_(g, alpha=1 - self.beta1)
            v.mul_(self.beta2).addcmul_(g, g, value=1 - self.beta2)
            m_hat = m / (1 - self.beta1 ** self.t)
            v_hat = v / (1 - self.beta2 ** self.t)
            p.data.addcdiv_(m_hat, v_hat.sqrt() + self.eps, value=-self.lr)

    def zero_grad(self):
        # zero grads in place
        for p in self.params:
            if p.grad is not None:
                p.grad.zero_()
```

### Data Loader
Implement a simple dataloader class. This should read a text file from its filename passed as `textfile` and convert the entire thing to tokens using the call
```python
tokenizer.encode(<data>, allowed_special="all")
```
where the `allowed_special` argument is needed to ensure the tokenizer properly handles the special tokens we added. Here `tokenizer` is a `tiktoken` tokenizer set up in the manner shown below in this notebook.

The dataloader follows a Python [iterator](https://example.com) convention, so that you could call
```python
for x,y in loader:
    # do your update on this minibatch
```
where `x` and `y` are integer tensors of size `(batch_size, seq_len)`. To generate this data, read `batch_size` sequences of length `seq_len+1` and convert the first `seq_len` tokens into `x`, and the shifted-by-one `seq_len` tokens into `y`. To keep things

### Visual Description
The page continues the implementation of the `Adam` class, showing the `__init__`, `step`, and `zero_grad` methods. Below that, it introduces the "Data Loader" section with instructions on how to implement it and how it should be used.

---
## Page 16
### Content
easy, just convert the entire
## Page 17
### Content
```python
 pat_str=base_tokenizer._pat_str,
 mergeable_ranks=base_tokenizer._mergeable_ranks,
 special_tokens={**base_tokenizer._special_tokens, "[INST]": 50257,"[/INST]": 50258}
)

def lr_schedule(i, total_iter, warmup_iter=200, decay_iter=2000, lr1=1e-3):
    # warmup then hold then linear decay
    if i < warmup_iter:
        return lr1 * (i + 1) / warmup_iter
    if i < decay_iter:
        return lr1
    decay_steps = max(total_iter - decay_iter, 1)
    return lr1 * max(0.0, 1 - (i - decay_iter) / decay_steps)

def train_llm(model, loader, opt, lr=None, warmup_iter=200, decay_iter=1000):
    total_iter = loader.batches
    model.train()
    for i, (x, y) in enumerate(loader):
        if lr is not None:
            opt.lr = lr_schedule(i, total_iter, warmup_iter=warmup_iter,
                                 decay_iter=decay_iter, lr1=lr)
        opt.zero_grad()
        logits = model(x)
        loss = cross_entropy_loss(logits, y)
        loss.backward()
        # training loop over loader with optional lr schedule
        opt.step()
```

### Testing training
If you implement all the steps above, you'll be able to run a simple training that can decrease loss for an extremely small network on the [tinychat](https://github.com/karpathy/tinychat) dataset. This part can all run on CPU. It should run for 12 iterations (takes two minutes on an M1 Macbook) and get the loss down to ~7.35 (from and initial 12.8).

**In [19]:**
```python
loader = DataLoader("/content/drive/MyDrive/hw_llm/tinychat.txt", tokenizer, 
                    1024, 16, max_read=1_000_000, device="cpu")
model = LLM((tokenizer.n_vocab//256+1)*256, 256, 8, 4, 2048, 512, 6)
opt = Adam(model.parameters(), lr=1e-3, betas=(0.9, 0.95))
train_llm(model, loader, opt)
```

### Training a reasonable model
If you want to actually train a reasonable model, then you'll need a GPU. The following code trains a reasonable model (for the given dataset) that gets loss down to ~1.55, after training for 30 minutes on a single H100 GPU. See

### Visual Description
The page contains several blocks of Python code with syntax highlighting. The first block defines a learning rate schedule and a training loop. The second block, labeled "In [19]", shows the initialization of a DataLoader, an LLM model, an Adam optimizer, and the execution of the training function. Between the code blocks are two sections of descriptive text with headings "Testing training" and "Training a reasonable model".

---
## Page 18
### Content
if you can adjust things to get the loss lower (you might want to e.g., add logging to [Weights and Biases](https://wandb.ai/site) or a similar service).

**In [20]:**
```python
loader = DataLoader("/content/drive/MyDrive/hw_llm/tinychat.txt", tokenizer, 
                    1024, 32, device="cuda")
model = LLM((tokenizer.n_vocab//256+1)*256, 512, 16, 8, 2048, 2048, 8).to("cuda")
opt = Adam(model.parameters(), lr=1e-3, betas=(0.9, 0.95))
train_llm(model, loader, opt, lr=1e-3, warmup_iter=100, decay_iter=1000)
```

If/when you get this far, you can try chatting with your model (you likely just want to save it using `torch.save`, and load it with this interface later). The following implements a simple sampling procedure with the created models to create a "chatbot" that works in the notebook. It's not the most impressive, but (in my opinion) it's pretty impressive for what you can build with ~200 lines of code, and 30 minutes on a GPU.

**In [21]:**
```python
def get_response(model, user_msg, tokens, max_length=100):
    seq_len = len(tokens)
    if len(tokens) == 0 or tokens[-1] != tokenizer._special_tokens['[INST]']:
        tokens.append(tokenizer._special_tokens['[INST]'])
    tokens += tokenizer.encode(" " + user_msg + " ", allowed_special="all")
    tokens.append(tokenizer._special_tokens['[/INST]'])
    out_msg = ""
    for i in range(max_length):
        with torch.inference_mode():
            output = model(torch.tensor([tokens[seq_len:]]).to("cuda"), seq_len,
                           use_kv_cache=True)
        probs = torch.softmax(output[0, -1] / 0.7, -1)
        seq_len=len(tokens)
        tokens.append(torch.multinomial(probs, 1).item())
        if tokens[-1] == tokenizer._special_tokens['[INST]']:
            tokens.pop(-1)
            break
        out_msg += tokenizer.decode([tokens[-1]])
    return out_msg, tokens

import ipywidgets as widgets
from IPython.display import display
import time

history = widgets.Output()
text = widgets.Text(placeholder='Enter your input', continuous_update=False)
ui = widgets.VBox([history, text])
tokens = []

def handle_value_change(change):
    global tokens
    if change['new'] != "":
        msg = text.value.strip()
        with history:
```

### Visual Description
The page features two main code blocks. The first, "In [20]", shows code for training a larger model on a GPU using CUDA. The second, "In [21]", defines a `get_response` function for generating text from the model and begins setting up an interactive UI using `ipywidgets`. There is explanatory text between the blocks.

---
## Page 19
### Content
```python
            print(f"You: {msg}")
            output, tokens = get_response(model, msg, tokens)
            print(f"AI: {output.strip()}")
            text.value = ""

text.observe(handle_value_change, names='value')
display(ui)
```
`VBox(children=(Output(), Text(value='', continuous_update=False, placeholder='Enter you`

**In [22]:**
```python
# save trained model weights
save_path = '/content/drive/MyDrive/hw_llm/trained_llm_state.pth'
torch.save(model.state_dict(), save_path)
print(f'saved model weights to {save_path}')
```
`saved model weights to /content/drive/MyDrive/hw_llm/trained_llm_state.pth`

**In [ ]:**
```python

```

### Visual Description
This page concludes the code from the previous page, showing the completion of the `handle_value_change` function and the display of the UI. Below that, a code block labeled "In [22]" demonstrates how to save the trained model's weights to a file, followed by the printed output confirming the save. At the bottom, there is an empty Jupyter notebook input cell.

---
