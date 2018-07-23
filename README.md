# Introdução

Começando os estudos de Node.js através do curso: https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/content

## If/switch
### If
Essas são as estruturas básicas de decisões dentro do JavaScript suas declarações funcionam da seguinte forma:
```IF``` significa literalmente _se_ e ```else``` significa _se não_ ou seja o _if_ tem como forma básica:
```if``` ( _a condição que deve ser satisfeita_ ){
    _O código que será executado caso a condição seja satisfeita_
}
```else``` {
    _o codigo que será executado caso a condição não seja satisfeita_
}

```js
let user = {
    nome: 'Arthur',
    idade: 25
}
let user2 = {
    nome: 'Jose',
    idade: 17
}
let bar = (user) => {
    if (user.idade < 18){
        console.log('Não pode entrar')
    }
    else {
        console.log('Bem vindo')
    }
}
bar(user)
bar(user2)
//Output
// Bem vindo
// Não pode entrar
```

### Else if
O comando ```else if``` é utilizado quando você possui mais do que apenas duas opções e deseja complementar a sua estrutura de decisão, _else if_ pode ser traduzido exatamente como: _se não se_ e com isso você pode somar várias chamadas diferentes como por exemplo:
```js
let user = {
    nome: 'Arthur',
    cidade: 'Brasilia'
}
let user2 = {
    nome: 'Gustavo',
    cidade: 'São Paulo'
}
let user3 = {
    nome: 'Jose',
    cidade: 'Campinas'
}

let cidade = (user) => {
    if (user.cidade === 'Brasilia'){
        console.log(`Olá ${user.nome} sua cidade é ${user.cidade}`)
    } else if (user.cidade === 'São Paulo'){
        console.log (`Olá ${user.nome} sua cidade é ${user.cidade}`)
    } else {
        console.log ('ué')
    }
}
cidade(user)
cidade(user2)
cidade(user3)
// Output
// Olá Arthur sua cidade é Brasilia
// Olá Gustavo sua cidade é São Paulo
// ué
```
No exemplo acima utilizamos apenas uma chamada do ```else if```, claro que poderíamos continuara concatenando quantas chamadas fossem necessárias porem isso torna o código mais dificil de ler e afeta a performance do sistema, uma vez que eu preciso fazer um novo teste para cada nova declaração, por isso a medida que as opções aumentam o ideal é utilizar uma nova estrutura:
### Switch
A condicional *switch* avalia uma expressão combinando o valor da expressão para uma clausula ```case```, e executa as instruções associadas ao ```case```
Sua sintaxe básica utiliza 4 keywords:
- ```switch``` - aqui começa a chamada da expressão
- ```case```  - aqui é declarado o resultado esperado da condicional 
- ```break``` - indica do caso atual
- ```default``` - indica o que será executado caso a condição não seja satisfeita

Dessa forma a expressão é feita da seguinte forma:

- ```swtich``` (expressão) {
-     ```case``` valor1 :
-     //Instruções a serem executadas
-     ```break```;
}

vamos a um exemplo para facilitar:
```js
let user = {
    nome: 'Arthur',
    cidade: 'Brasília',
}
let dizOla = (user) => {
    switch (user.cidade){
        case 'São Paulo':
        console.log('A cidade é Sampa')
        break

        case 'Florianópolis':
        console.log('A cidade é Floripa')
        break

        case 'Salvador':
        console.log('A cidade é Salvador')
        break

        default:
        console.log('A cidade não foi encontrada') 
    }
}
dizOla(user)
// Output
// ???
```
O que acontece se eu esquecer o ```break```?
Nessa situação seu programa irá executar o caso correto e o caso seguinte até encontrar o próximo ```break```

## JSON


## Salvando as notas para um arquivo


## DRY - Don't Repeat Yourself ("Não se repita")


## Deletando notas


## Lendo notas


## Debugger
O debugger é uma ferramenta muito interessante do node v8.0.0+ onde você pode acompanhar a execução do seu programa linha a linha. Para tal devemos executar a aplicação utilizando:
```bash
node inspect app.js
```

Desa forma o aplicativo vai ser executado em modo de Debug dentro do debug temos alguns comandos que podem ser utilizados:
- n -> Vai para a próxima linha
- c -> executa até o final do programa OU até encontrar uma flag ```debugger``` no código
- repl -> permite manipular as informações de variáveis, verificar os valores das mesmas e etc

o comando inspect pode ser utilizado em conjunto com o nodemon

Para acessar o debugger via Chrome, basta iniciar o programa via:
```js
node --inspect-brk app.js
```

## Listando as notas

## Como tornar argumentos obrigatórios

## Arrow Functions
Arrow Functions é uma nova implementação do ES6 que tem como objetivo facilitar a declaração de funções uma vez que você pode ignorar o uso de ```keywords```: ```function``` e ```return``` .
Porém as AF não "vincula" o ```this```, por isso seu uso não é recomendado
```js
let user = {
    nome: 'Nome',
    dizOla: () => {
        console.log(`Ola. Meu nome é ${this.name}`)
    }
}
dizOla()
//-------
// output > SyntaxErro
```
### Arrow function com uma expressão
No caso de uma função que tem apenas uma expressão ela pode ser escrita da seguinte forma:
```js
let user = {
    nome: 'Nome',
    dizOla: () => console.log('Ola.')
}
```
### Arrow function com um parâmetro
Caso a função possua apenas um parâmetro podemos utilizar a seguinte sintaxe:
```js
let user = {
    nome: 'nome',
    dizOla: nome => console.log(`Ola. ${nome}`)
}
```
 
## ES6 function 
Uma forma de utilizar uma sintaxe parecida mas com o uso do this é através da declaração do ES6:
```js
let user = {
    nome: 'Nome',
    dizOlaAlt () {
        console.log(`Ola. Meu nome é ${this.nome}`)
    }
}
dizOlaAlt()
// -----
// output> Ola. Meu nome é Nome
```
Nesse caso, ao declarar um metodo para um objeto colocamos o nome do método seguido do parentesis e as chaves, sem a necessidade de colocar : após o nome do método

Arrow functions também não binda o arguments command

