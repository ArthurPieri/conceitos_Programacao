#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Nov  6 15:35:14 2019

@author: arthurpieri
"""

import numpy as np
from scipy import stats

jogadores = [40000, 18000, 12000, 250000, 30000, 140000, 300000, 40000, 800000]

np.mean(jogadores)

np.median(jogadores)

quartis = np.quantile(jogadores, [0, 0.25, 0.5, 0.75, 1])
quartis

np.std(jogadores) # N
np.std(jogadores, ddof=1) # n-1

stats.describe(jogadores)
