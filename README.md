# Introdução

Começando os estudos de Node.js através do curso: https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/content

## Módulo 1 (Note APP)
Nessa seção começamos com o básico do Node e criando uma simples aplicação de notas

### Debugger
O debugger é uma ferramenta muito interessante do node v8.0.0+ onde você pode acompanhar a execução do seu programa linha a linha. Para tal devemos executar a aplicação utilizando:
```bash
node inspect app.js
```

Desa forma o aplicativo vai ser executado em modo de Debug dentro do debug temos alguns comandos que podem ser utilizados:
- n -> Vai para a próxima linha
- c -> executa até o final do programa OU até encontrar uma flag ```js debugger ``` no código
- repl -> permite manipular as informações de variáveis, verificar os valores das mesmas e etc

o comando inspect pode ser utilizado em conjunto com o nodemon