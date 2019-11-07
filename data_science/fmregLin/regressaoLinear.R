# Fazendo o tutorial dos sites:
# 1. https://estatsite.com/2016/01/05/regressao-linear-simples-rapida/
# 1.1. https://www.youtube.com/watch?v=PiCrt0oNEuU
# 1.2. https://estatsite.com/2017/05/11/residuos-de-uma-regressao-linear-no-r/
# 2. https://estatsite.com/2016/01/07/regressao-linear-simples-parte-2/ 
# 3. https://estatsite.com/2016/01/10/regressao-linear-simples-parte-3/
# 4. https://estatsite.com/2017/02/01/regressao-logistica-primeiros-passos/
# 5. https://www.curso-r.com/blog/2017-07-29-segundo-menor-dl/
# Arthur

# A regressão linear pode ser expressa na forma:
# y = a*x + beta + erro

install.packages("kernlab", dependencies=TRUE)
library("kernlab")
data(spam)