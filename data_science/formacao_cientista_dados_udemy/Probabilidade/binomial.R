# dbinom() -> Encontra a probabilidade
# Primeiro parâmetro o número de sucessos esperado
# Segundo o tamanho do experimento
# Terceiro a chance de ocorrência.

# Quero que der cara 3 vezes jogando a moeda 5 vezes
dbinom(3,5,0.5)

# Agora usando o exemplo do sinal de 4 tempos
# 4 sinais de 4 tempos, prob = 0, 1, 2, 3, 4
# 0
dbinom(0,4,0.25)
# 1
dbinom(1,4,0.25)
# 2
dbinom(2,4,0.25)
# 3
dbinom(3,4,0.25)
# 4
dbinom(4,4,0.25)
# pbinom() -> Cumulativa Acumula todas as probabilidades
pbinom(4,4,0.25)

# Prova 12 questões com 4 alternativas
# 7 Questões certas
dbinom(7,12,0.25)
