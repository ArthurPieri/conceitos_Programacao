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


## Module yargs
### What's Yargs?
Yargs helps you build interactive command line tools by parsing arguments and generating an elegant user interface.

Yargs gives you:

commands and (grouped) options (like module run -n --force),
a dynamically generated help menu based on your arguments,
bash-completion shortcuts for commands and options,
and much more.
With these features, and many more, yargs allows you to focus on building your program without worrying about your args.

### Install
Open your terminal, navigate to your project, and run using npm:

$ npm install --save yargs

### Getting Started
After creating example.js start with the following code to get you going:
          
```js
#!/usr/bin/env node

require('yargs')
  .usage('$0 <cmd> [args]')
  .command('hello [name]', 'welcome ter yargs!', (yargs) => {
    yargs.positional('name', {
    type: 'string',
    default: 'Cambi',
    describe: 'the name to say hello to'
    })
 }, function (argv) {
      console.log('hello', argv.name, 'welcome to yargs!')
    })
    .help()
    .argv
```          
And in your terminal run:

```$ example.js --help```       
        
To get this output:
   
  example.js <cmd> [args]

  Commands:
    hello [name]  welcome ter yargs!

  Options:
    --help  Show help                                                    [boolean]
          
Run hello command:
          
  $ node example.js hello --name Parrot
  hello Parrot welcome to yargs!

  ### Reference
  http://yargs.js.org/docs/