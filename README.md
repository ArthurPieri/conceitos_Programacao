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
```bash
$ npm init
```
Tem como função inciar os projetos em node que utilizam algum tipo de dependência do NPM por isso ele vai criar dois arquivos:
- package.json
- package-lock.json

A função desses dois arquivos é manter um registro e controle de toda a *dependecy-tree* dos módulos utilizados em su programa

Ao executar o comando ele vai perguntar uma série de questões para gerar corretamente o seu package.json (porém ele pode ser editado depois)

Uma coisa interessante é que ele é estritamente aditivo, ou seja o comando não deleta nada do package.json a não ser em casos específicos

### npm install
Ese comando instala um pacote e todos as suas dependências

um "pacote" é:

a) uma pasta contendo o programa descrito pelo arquivo: package.json
b) um gzipped tarball contendo (a)
c) uma url que leva para (b)
d) um <name>@<version> que está publicado em um repositório que contém (c)
e) um <name>@<tag> que aponta para (d)
f) um <name> que possui uma versão 'latest' que satisfaz (e)
g) uma <git remote url> que leva para (a)

npm install (in package directory, no arguments):

Install the dependencies in the local node_modules folder.

In global mode (ie, with -g or --global appended to the command), it installs the current package context (ie, the current working directory) as a global package.

By default, npm install will install all modules listed as dependencies in package.json.

With the --production flag (or when the NODE_ENV environment variable is set to production), npm will not install modules listed in devDependencies.

npm install saves any specified packages into dependencies by default. Additionally, you can control where and how they get saved with some additional flags:

-P, --save-prod: Package will appear in your dependencies. This is the default unless -D or -O are present.

-D, --save-dev: Package will appear in your devDependencies.

-O, --save-optional: Package will appear in your optionalDependencies.

--no-save: Prevents saving to dependencies.

When using any of the above options to save dependencies to your package.json, there are two additional, optional flags:

-E, --save-exact: Saved dependencies will be configured with an exact version rather than using npm's default semver range operator.

-B, --save-bundle: Saved dependencies will also be added to your bundleDependencies list.

npm install [<@scope>/]<name>@<version>:

Install the specified version of the package. This will fail if the version has not been published to the registry.

Example:

    npm install sax@0.1.1


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

Para acessar o debugger via Chrome, basta iniciar o programa via:
```js
node --inspect-brk app.js
```

### Listando as notas

### Como tornar argumentos obrigatórios

### Arrow Functions
Arrow functions não bind o This, por isso qualquer função ou método definido como uma Arrow Function não pode fazer uso do this.
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

Uma forma de utilizar uma sintaxe parecida mas com o uso do this é através da declaração do ES6:
```js
let user = {
    nome: 'Nome',
    dizOlaAlt () {
        console.log(`Ola. Meu nome é ${this.name}`)
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