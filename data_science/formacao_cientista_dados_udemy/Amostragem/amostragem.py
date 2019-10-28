#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Oct 24 17:42:26 2019

@author: arthurpieri
"""

"""
Amostragem Simples
"""
# Importando as bibliotecas
import pandas as pd
import numpy as np

base = pd.read_csv('iris.csv')
base

# Verificando o formato da base
base.shape

# Seteando uma semente para o random
np.random.seed(2345)
# Gerando uma amostra aleatórioa de 0s e 1s
amostra = np.random.choice(a = [0, 1], size = 150, 
                           replace = True,
                           p = [0.5, 0.5])

# Verificando o comprimento das amostras
len(amostra)
len(amostra[amostra == 1])
len(amostra[amostra == 0])

"""
Amostragem Estratificada
"""
from sklearn.model_selection import train_test_split

iris = base
iris['class'].value_counts()

x, _, y, _ = train_test_split(iris.iloc[:, 0:4], iris.iloc[:, 4],
                              test_size = 0.5, 
                              stratify = iris.iloc[:,4])

y.value_counts()

infert = pd.read_csv('infert.csv')
infert['education'].value_counts()

x1, _, y1, _ = train_test_split(infert.iloc[:, 2:9],
                                infert.iloc[:, 1],
                                test_size = 0.6,
                                stratify = infert.iloc[:, 1])

y1.value_counts()

"""
Amostragem Sistematica
"""
from math import ceil

populacao = 150
amostra = 15
k = ceil(populacao / amostra)

r = np.random.randint(low = 1, high = k+1, size = 1)

acumulador = r[0]
sorteados = []

for i in range(amostra):
    sorteados.append(acumulador)
    acumulador +=k
    
base = pd.read_csv('iris.csv')
base_final = base.loc[sorteados]
