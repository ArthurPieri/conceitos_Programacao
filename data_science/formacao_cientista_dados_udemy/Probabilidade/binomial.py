from scipy.stats import binom

# Jogar uma moeda 5 vezes, qual a probabilidade de dar cara 3 vezes?
prob = binom.pmf(3,5,0.5)

# Passar por 4 sinais de 4 tempos
# 0
binom.pmf(0, 4, 0.25)
# 1
binom.pmf(1, 4, 0.25)
# 2
binom.pmf(2, 4, 0.25)
# 3
binom.pmf(3, 4, 0.25)
# 4
binom.pmf(4, 4, 0.25)

# E se forem sinais de dois tempos?
binom.pmf(4,4,0.5)

# Probabilidade acumulativa
binom.cdf(4,4,0.25)

# Concurso com 12 questões de 4 alternativas. Qual a probabilidade de acertar 7 questões?
binom.pmf(7, 12, 0.25)