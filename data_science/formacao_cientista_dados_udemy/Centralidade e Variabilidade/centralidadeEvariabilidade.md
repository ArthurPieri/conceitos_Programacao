# Medidas de centralidade e variabilidade

## Centralidade

Medidas de centralidade buscam estudar como está o centro dos dados, como eles estão centralizados

### Média

Média é a soma de todos os valores dividido pela quantidade de valores

N -> população
n -> Amostra

$\mu$ -> População
$\bar X$ -> amostra
OU
É o valor mais frequente.
Pode haver mais de uma moda, ou nenhuma moda na mesma amostra.

### Mediana

A mediana é o valor no meio da amostra depois de terem sido ordenados em ordem crescente.

#### Mediana Par

Se a quantidade for par, a mediana será a média dos valores nas posições: 
n/2 + (n/2)+1

#### Media Impar

Se a quantidade for impar, a mediana será o valor na posição 
(n+1)/2

### Media VS Mediana

Suponhamos que temos a seguinte amostragem:

[ 10, 20, 30, 40, 10000 ]

Temos como $\bar x$: 2020
e a Mediana: 30

Por que uma diferença tão grande?

Porque a média é muito afetada por extremos, conforme veremos a seguir.

## Variabilidade

Medidas de Variabilidade buscam estudar a distância entre os dados, a diferença entre eles.

## Variância

Mostra a regularidade do conjunto de dados em relação a média

### Variancia Populacional

$\sigma$ = $\sum_{i = 1}^{n}\frac{(Xi - \bar X)^2}{N}$

A variância populacional é a soma de cada elemento (xi) menos a média dos dados da população

### Variancia Amostral

s² = $\sum_{i=1}^{n}\frac{(Xi - \bar X)^2}{n -1}$

## Desvio Padrão

É a Raiz quadrada da variância

## Amplitude

A diferença entre o maior e o menor elementos

## Não centrais: Quartis

Quartis:
Q1: 25% dos menores valores
Q2: 50%, igual a mediana
Q3: 75% dos maiores valores
