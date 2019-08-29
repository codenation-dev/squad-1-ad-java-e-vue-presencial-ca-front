FROM postgres:11-alpine

ENV DB_NAME logs

RUN mkdir -p /populate \
    mkdir -p /docker-entrypoint-initdb.d

COPY DDL.sql /populate/DDL.sql
COPY init.sh /docker-entrypoint-initdb.d/

RUN chmod +x /docker-entrypoint-initdb.d/init.sh
