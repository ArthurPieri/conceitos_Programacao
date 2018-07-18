# Introdução

Começando os estudos de Node.js através do curso: https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/content

# Módulo 0 (Node.js)

## Como instalar o node (windows e Linux)
Para instalar o node você pode acessar:

https://nodejs.org/en/

## O que é node.js
Node.js é uma plataforma construída sobre o motor JavaScript do Google Chrome (Chrome V8 ou simplesmente V8) para facilmente construir aplicações de rede rápidas e escaláveis. Node.js usa um modelo de I/O direcionada a evento não bloqueante que o torna leve e eficiente, ideal para aplicações em tempo real com troca intensa de dados através de dispositivos distribuídos.
    O Node.js é: 
    - event-driven 
    - non-blocking
    - single-threaded


## Por que usar node?
Node é uma plataforma extremamente versátil, criada para satisfazer as necessidades a nova internet

Com cada vez mais dispositivos conectados e a transmissão de dados crescendo de maneira exponencial
surgiu a necessidade de uma plataforma *lightweight* e capaz de lidar com uma grande quantidade de dados
de maneira totalmente assincrona, garantindo a performance e a reposta as requisções que estão sendo feitas.

Graças a sua flexibilidade e performance o node hoje é muito utilizado pelas maiores empresas do mundo
aqui uma lista de empresas que utilizam node em seus produtos:
- Netflix (https://www.youtube.com/watch?v=p74282nDMX8)
- Uber (https://www.youtube.com/watch?v=ElI5QtUISWM)
- Paypal (https://www.youtube.com/watch?v=-00ImeLt9ec)
- Godaddy (https://www.youtube.com/watch?v=MtpGVP-Qs-k)
- etc ...


## Instalando vscode ou outro editor de texto
Fica a vontade para instalar o editor de texto que melhor te satisfazer, pessoalmente prefiro o VSCode
para instala-lo basta acessar:

- https://code.visualstudio.com


## Hello World

# Módulo 1 (Note APP)
Nessa seção começamos com o básico do Node e criando uma simples aplicação de notas

## require
O comando ```require``` é utilizado para incluir novos módulos prontos ao seu código, por exemplo, o node possui alguns módulos prontos como o módulo ```crypto``` que pode ser utilizado dentro de seu código

Outra utilidade para o comando ```require``` é o uso de arquivos criados por você, facilitando assim a separação do código, melhor organização das pastas e um código mais legível de um modo geral

## module.exports
Vamos imaginar que você crie uma função para adicionar dois números na pasta matematica-basica/add.js:
```js
let add = (num1, num2) => {
    return num1 + num2
}
```

Porém você quer utilizar essa mesma função em outros arquivos, como no arquivo matematica/expo.js 
Nesse caso você tem duas opções, criar novamente a mesma função no arquivo atual, ou requerer a função do outro arquivo: 
```js
const add = require('../matematica-basica/add.js')

add.add(2.3)
```

Todavia para que isso seja possível é preciso informar ao node que aquela função pode ser enviada para outros módulos, utilizando o comando ```module.export```
matematica-basica/add.js
```js
let add = (num1, num2) => {
    return num1 + num2
}

module.exports = {
    add
}
```
## npm init 
```bash
$ npm init
```
Tem como função inciar os projetos em node que utilizam algum tipo de dependência do NPM por isso ele vai criar dois arquivos:
- package.json
- package-lock.json

A função desses dois arquivos é manter um registro e controle de toda a *dependecy-tree* dos módulos utilizados em su programa

Ao executar o comando ele vai perguntar uma série de questões para gerar corretamente o seu package.json (porém ele pode ser editado depois)

Uma coisa interessante é que ele é estritamente aditivo, ou seja o comando não deleta nada do package.json a não ser em casos específicos

## npm install
Ese comando instala um pacote e todos as suas dependências

um "pacote" é:

a) uma pasta contendo o programa descrito pelo arquivo: package.json

b) um gzipped tarball contendo (a)

c) uma url que leva para (b)

d) um <name>@<version> que está publicado em um repositório que contém (c)

e) um <name>@<tag> que aponta para (d)

f) um <name> que possui uma versão 'latest' que satisfaz (e)

g) uma <git remote url> que leva para (a)

O comando `npm install` cria uma pasta chamada node_modules e instala todas as dependências descritas no package.json
essa pasta é específica para cada projeto

Existe porém um comando utilizado para instalar um modulo na sua máquina como um todo:
`npm install <package> -g` ou `npm install <package> --global`
Mais a frente devemos entender a utilidade de instalar um pacote de maneira global

### Outras flags

-P, --save-prod: Package will appear in your dependencies. This is the default unless -D or -O are present.

-D, --save-dev: Package will appear in your devDependencies.

-O, --save-optional: Package will appear in your optionalDependencies.

--no-save: Prevents saving to dependencies.

--sav: Package will appear in your dependencies

### npm install <name>@<version>:

Vocẽ também pode instalar uma versão específica do pacote desejado para isso basta utilizar o @<version>

Exemplo:
```    
npm install sax@0.1.1
```

## Module lodash
Lodash é uma biblioteca de JavaScript lançada inicialmente em 2012 e que continua ativa até hoje, tem como objetivo ajudar programadores a escrever um codigo mais conciso e faceis de manter.

Ele pode ser dividido em várias áreas principais:
### Utilidades 
para simplificar tarefas comuns como determinar tipos de variaveis e simplificar operações matemáticas
### Funções: 
Tem como objetivo simplificar: 
- _binding_ ("Que seria uma amarração da função");
- _decorating_ ("É um conceito um pouco mais complexo, mas que tem como objetivo ampliar o escopo de uma função por um breve periodo de tempo, uma função que tem como argumento outra função, por isso não vamos tratar sobre ele");
- _constraining_ ("");
- _Throttling_ ("Literalmente estrangulamento, acontece quando sua aplicação perde performance por excesso de chamadas de uma função, dessa forma você limita a quantidade de chamadas que podem ser feita dentro de um periodo de tempo");
- _Debouncing_ ("É um pouco diferente, é como se seu programa falasse: 'Só vou executar isso depois que todo o pedido for feito', mais ou menos como um garçom, que espera todos na mesa fazerem seus pedidos antes de leva-los até a cozinha");
- _currying_ ("È uma forma de construir funções que permite a passagem de apenas uma parte dos argumentos e como retorno receber a uma função que está esperando o resto dos argumentos");
- mudanças de ponteiros ("")
### Strings
Funções de conversão para executar operações básicas com _strings_ como: 
- _Trimming_ ("É uma das tarefas mais comuns tem como objetivo remover _whitespaces_ do incio e final de uma _string_");
- Convertendo para _UPPERCASE_, _CamelCase_ e etc.

### Array
- _Creating_;
- _Spliting_;
- -Combining_;
- _Modifying_;
- _Compressing_.

### Objects
- _Accessing_
- _Extending_
- _Merging_
- _Defaults_
- _Transforming_

### E mais...
ELe ainda pode lidar com:
- _Collections_;
- _Seq_;
- ETC.

## process.argv


## If/switch


## Module yargs


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

# Referências
- https://docs.npmjs.com
- https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- https://stackoverflow.com/questions/7190439/is-there-a-c-like-lambda-syntax-in-javascript
- https://medium.com/@thejasonfile/es5-functions-vs-es6-fat-arrow-functions-864033baa1a
- https://stackoverflow.com/questions/34361379/arrow-function-vs-function-declaration-expressions-are-they-equivalent-exch
