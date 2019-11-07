# Fazendo o tutorial dos sites:
# 1. https://estatsite.com/2016/01/05/regressao-linear-simples-rapida/
# 1.1. https://www.youtube.com/watch?v=PiCrt0oNEuU
# 1.2. https://estatsite.com/2017/05/11/residuos-de-uma-regressao-linear-no-r/
# 2. https://estatsite.com/2016/01/07/regressao-linear-simples-parte-2/ 
# 3. https://estatsite.com/2016/01/10/regressao-linear-simples-parte-3/
# 4. https://estatsite.com/2017/02/01/regressao-logistica-primeiros-passos/
# 5. https://www.curso-r.com/blog/2017-07-29-segundo-menor-dl/
# 6. https://fmeireles.com/blog/rstats/estimando-regressoes-logisticas-no-r-com-razao-de-chance/
# Arthur

install.packages("titanic")

library(titanic)

t <- titanic_train

names(t)

modelo <- glm(Survived ~ Sex, family = "binomial", data = t)

summary(modelo)

# Interpretando utilizando as razões de chance
exp(modelo$coefficients)

# (intercept)      Sexmale
# 2.87654321    0.08096732

# Esses dados mostram de maneira clara que: para cada mulher que sobreviveu 0.08 homens se salvaram
# ou de forma mais clara: a cada 100 mulheres 8 homens se salvaram