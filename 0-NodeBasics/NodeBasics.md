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

arthados crescendo de maneira exponencial
arthe lidar com uma grande quantidade de dados
arth reposta as requisções que estão sendo feitas.
arth
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
