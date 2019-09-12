x1 <- runif(30, 37.9, 38.8)
x2 <- runif(30, 36.0, 38.2)
t.test(x1, x2)
wilcox.test(x1, x2)