# Banco Postgres do AceleraDev

Banco criado para o trabalho final do AceleraDev. Para executá-lo, basta executar o comando:

```bash
$ docker run -d --name postgres -p 5432:5432 leolinda/postgres:11
```

Isso fará com que ele suba um container e, se o banco não existir, ele cria a estrutura como definido no arquivo [`DDL.sql`](DDL.sql).

Para conectar no banco, utilize os valores padrão da [imagem oficial do Postgres](https://hub.docker.com/_/postgres). Caso deseje alterar esses dados de conexão, basta passá-los como variáveis de ambiente para o container:

```bash
$ docker run -d --name postgres -e POSTGRES_PASSWORD=123mudar -e POSTGRES_USER=my_awesome_user -p 5432:5432 leolinda/postgres:11
```
