# Introdução

Começando os estudos de Node.js através do curso: https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/content

## Módulo 0 (Node.js)

### Como instalar o node (windows e Linux)

### O que é node.js
Node.js é uma plataforma construída sobre o motor JavaScript do Google Chrome (Chrome V8 ou simplesmente V8) para facilmente construir aplicações de rede rápidas e escaláveis. Node.js usa um modelo de I/O direcionada a evento não bloqueante que o torna leve e eficiente, ideal para aplicações em tempo real com troca intensa de dados através de dispositivos distribuídos.
    O Node.js é: 
    - event-driven 
    - non-blocking
    - single-threaded


### Por que usar node?

### Instalando vscode ou outro editor de texto

### Hello World

## Módulo 1 (Note APP)
Nessa seção começamos com o básico do Node e criando uma simples aplicação de notas

### require
O comando ```require``` é utilizado para incluir novos módulos prontos ao seu código, por exemplo, o node possui alguns módulos prontos como o módulo ```cryto``` que pode ser utilizado dentro de seu código

Outra utilidade para o comando ```require``` é o uso de arquivos criados por você, facilitando assim a separação do código, melhor organização das pastas e um código mais legível de um modo geral

### module.exports
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
### npm init 


### npm install


### Module lodash


### process.argv


### If/switch


### Module yargs


### JSON


### Salvando as notas para um arquivo


### DRY - Don't Repeat Yourself ("Não se repita")


### Deletando notas


### Lendo notas


### Debugger
O debugger é uma ferramenta muito interessante do node v8.0.0+ onde você pode acompanhar a execução do seu programa linha a linha. Para tal devemos executar a aplicação utilizando:
```bash
node inspect app.js
```

Desa forma o aplicativo vai ser executado em modo de Debug dentro do debug temos alguns comandos que podem ser utilizados:
- n -> Vai para a próxima linha
- c -> executa até o final do programa OU até encontrar uma flag ```debugger``` no código
- repl -> permite manipular as informações de variáveis, verificar os valores das mesmas e etc

o comando inspect pode ser utilizado em conjunto com o nodemon

### Listando as notas

### Como tornar argumentos obrigatórios

### Arrow Functions