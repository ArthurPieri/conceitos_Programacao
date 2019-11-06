# Probabilidade

É detonada por (P)

Matematicamente é um resultado entre 0 e 1 (0 <= P <= 1)

P = 1; evento certo
P = 0; evento impossível

Probabilidades impossívels:

1. Negativas (-0.2)
2. Maiores do que 1 (2/1)

## Conceitos

### Experimento

É o que está sendo estudado

### Espaço Amostral

Todas as possibilidades de ocorrência do evento

### Evento

Resultados ocorridos

### Exemplos

1. Experimento: Jogar moeda
2. Espaço Amostral: cara ou coroa
3. Evento: coroa

### Eventos Excludentes

Eventos que não podem ocorrer ao mesmo tempo

*Exemplo*: Jogar um dado e ser 1 e par

### Eventos não Excludentes

Eventos que podem ocorrer ao mesmo tempo

*Exemplo*: Jogar um dado e ser 2 e par

### Eventos dependentes

A ocorrência de um evento afeta o outro. Um tem que ocorrer para que o outro ocorra.

### Eventos independentes

A ocorrência de um evento não afeta o outro.

### Por que estudar tipos de eventos

Muda a forma como iremos calcular a probabilidade de acordo com o tipo de evento

## Um único evento

Como calcular a probabilidade de um evento único:

    *P = ocorrência esperada / Número de eventos possíveis*

*Exemplo*:

Jogar uma moeda e dar cara: P = 1/2, P = 0.5 ou 50%

*Exemplo 2*:

Jogar um dado e dar 6: P = 1/6, P = 0.16 ou 16%

*Exemplo 3*:

Jogar um dado e dar 1 ou 6: P = 2/6, P = 0.33 ou 33%

*Exemplo 4*:

Quando o resultado é igual ao espaço amostral

Jogar um dado e dar 1, 2, 3, 4, 5 ou 6: P = 6/6, P = 1 ou 100%

*Exemplo 5*:

Jogar um dado e dar impar ou maior que 4 (1,3,5,6); P = 4/6, P = 0.66 ou 66%

## Eventos excludentes

Soma-se as probabilidades:

*Exemplo 1*:

Jogar um dado e ser 1 ou par: 1/3 + 3/6 = 4/6 ou 0.66 ou 66%

Tendo em vista que existem 3 opções de números par no dado (2, 4 e 6) e uma possibilidade de ele ser "1".
Desta forma se eu jogar o dado e ele cair em qualquer um dos 4 números (1, 2, 4 e 6) meu resultado será atingido. Aqui entra um pouco nos conceitos de Lógica e operadores lógicos ("e" e "ou")

## Eventos não-excludentes

Subtrair as sobreposições

*Exemplo 1*:

Jogar um dado e ser 2 ou par: 1/6 + 3/6 - 1/6 = 3/6 = 0.5 ou 50%

Aqui novamente temos que lembrar dos conceitos de operadores lógicos. Mas por que subtrair 1/6 da equação?
A quantidade de opções "Par" no dado são: (2, 4 e 6)
A outra condição é caso ele seja "2": (2)
Note que o "2" se repete nas possibilidades, mas não existem duas faces com o número 2 no dado, por isso devemos remover uma dessas "repetições" ao calcular a probabilidade

## Eventos independentes (com reposição)

Multiplicar as probabilidades

*Exemplo 1*:

Qual a probabilidade de jogar dois dados, e dar 1 e 6: (Dois eventos independentes e nesta ordem)

1. A probabilidade de jogar um dado e dar 1 é 1/6
2. A probabilidade de jogar um dado e dar 6 é 1/6

Porém ao jogar dois dados a probabilidade de que dê exatamente 1 e 6 nos dados diminui consideravelmente:

- 1/6 * 1/6 = 1/36 = 0.027 ou 2.7%

Sabendo que eu tenho 2 eventos, onde primeiro eu jogo um dado e espero que de 1 (1/6)
O próximo lançamento tem que dar 6 (1/6) mas lembrando que a chance de ele acontecer já é de 1/6 pelo lançamento anterior.

## Eventos dependentes (sem reposição)

Multiplicar as probabilidades retirando o evento que já ocorreu

*Exemplo 1*:

Com 6 cartas na mão (A, 2, 3, 4, 5 e 6), qual a probabilidade de tirar primeiro o "A" e em seguida o "4" ?

1. Probabilidade de tirar o "A" é 1/6
2. Porém uma vez que o A já foi tirado, a probabilidade de tirar o 4 aumenta já que eu passo a ter 5 cartas na mão e não 6 como anteriormente logo 1/5
3. Por fim eu multiplico as probabilidades: 1/6 * 1/5 = 1/30 = 0.033 ou 3.3%

## Probabilidade a "Longo Prazo"

Quando falamos de probabilidade falamos de algo a longo prazo, pois pequenas amostras estão sujeitas ao acaso.

Jogando um dado "justo", qual a média esperada?
(1 + 2 + 3 + 4 + 5 + 6) / 6 = 3.5

*Exemplo no R*:

Vamos criar um programa em R que calcule a média ao jogar o dado:

    x = 0
    for (i in 1:6) {
        x = x + sample(1:6, 1)
    }
    x = x/6
    x

Ao executar esse código a média pode variar muito como por exemplo:

1. 2.666...
2. 4.333...
3. 3.166...
4. 2.166...

Porém ao executar esse mesmo código mas dessa vez exeutando para 100000 jogadas:

    x = 0
    for (i in 1:100000) {
        x = x + sample(1:6, 1)
    }
    x = x/100000
    x

Os resultados tendem a ir para a média calculada

1. 3.50031
2. 3.49667
3. 3.50041
4. 3.50014
