nums <- read.csv(file="/home/alura/numeros.csv")
nums
cor(nums$X1, nums$X2)

a <- c(2, 3, 4)
b <- c(8, 6, 4)
cor (a, b)
cor(a, b, method="pearson")
cor(a, b, method="spearman")