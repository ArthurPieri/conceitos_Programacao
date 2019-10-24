# Algumas funções usadas para criar amostras no R
# sample() -> gera uma amostra aleatória simples
# strata() -> Usada para gerar amostra estratificada
# s.sy -> Gera amostra sistematica

# Pacote de dados padrão do R
iris

# Verificar o tamanho do pacote de dados
dim(iris)
# 150 5

# A função sample recebe 4 parâmetros
# O primeiro é o conjunto de dados a ser utilizada
# O segundo é a quantidade de números aleatórios a serem gerados
# O terceiro para informar se é com reposição ou não
# O quarto é um retorno de probabilidade
amostra <- sample(c(0,1), 150, replace=TRUE, prob=c(0.5,0.5))
amostra

# Verificar quantos números 1 e 0 foram gerados
length(amostra[amostra==1])
length(amostra[amostra==0])

# Para gerar a mesma amostra sempre é possível utilizar a função set.seed() com uma semente padrão antes de executar
# a função sample
set.seed(123)
sample(c(100),1)

# para usar uma amostra estratificada
# Vamos pegar as categorias do conjunto de dados iris
summary(iris)

# instalando o pacote necessário para utilizar a função strata
install.packages("sampling")
library(sampling)

# Para a funlçao estrata, usamos 4 parâmetros novamente
# 1o conjunto de daods, 
# 2o vetor com as colunas, 
# 3o um vetor com o tamanho de cada estrato
# 4o o método para gerar a estratificação
amostra2 <- strata(iris,c("Species"), size=c(25,25,25), method = "srswor")
summary(amostra2)

# Outro conjunto de dados padrão do R
infert
summary(infert)

# Como gerar uma amostra estratificada proporcional a coluna education?
# Calcular: (número de elementos do estrato) / (população) * (Tamanho da amostra que eu quero)
120 / 248 * 100
# 0-5 = 5
# 6-11 = 48
# 12+ = 47

# Gerando então a amostra utilizando as informações acima
amostra3 = strata(infert, c("education"), size=c(5,48,47), method = "srswor")
summary(amostra3)

# O método srswor é o método padrão, ele gera uma amostra aleatórioa sem reposição
# para outros métodos ?strata

# Para o último exemplo, precisamos instalar novo pacote
install.packages("TeachingSampling")
library(TeachingSampling)

# Gerar uma amostra sistematica
# Lembrando novamente que a amostra sistematica gera um número aleatório e depois pega os elementos em "aleatório+N"
amostra4 = S.SY(150,10)
amostra4

amostrairis = iris[amostra4]
amostrairis