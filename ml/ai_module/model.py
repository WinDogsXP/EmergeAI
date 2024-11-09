import torch

def predict(data):
    input_tensor = torch.tensor(data, dtype=torch.float32)
    prediction = input_tensor.sum().item()
    return prediction