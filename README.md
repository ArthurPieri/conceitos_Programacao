# programmimg-concepts
Concentrando todos os repositórios de programação em um único lugar para facilitar na hora de setar novos ambientes e porque reune tudo o que estou apredendo em apenas um lugar

## Nestjs-psql-api
Aprendendo e testando o uso do Nest JS + PostgresSQL + Docker para desenvolvimento de sistemas
tutorial utilizado: https://medium.com/@iago.maiasilva/construindo-uma-api-com-nestjs-postgresql-e-docker-parte-1-criando-nosso-primeiro-endpoint-248d4b8ecc9c

### Executando o Projeto
Nesse projeto vamos utilizar diferentes variáveis de ambiente, tanto para configurar os containers do Docker como no sistema de fato por isso:
1. Criar um arquivo .env contendo as informações:
    - PG_USERNAME = Nome de usuário do banco de dados
    - PG_PASSWORD = Senha do usuário do banco de dados
    - PG_DATABASE = Nome da base de dados
    - PG_CONTAINER = Nome do Container
    - PG_PORTS = as portas no formato ' 1234:4321 '
    - JWT_SECRET = Definir o segredo para o jwt
2.  Executar: docker-compose up -d
