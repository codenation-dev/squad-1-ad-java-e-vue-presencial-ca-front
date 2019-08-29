#!/bin/bash

set -euo pipefail

echo "Verifying DB $DB_NAME presence ..."
result=`psql -v ON_ERROR_STOP=on -U "$POSTGRES_USER" -d postgres -t -c "SELECT 1 FROM pg_database WHERE datname='$DB_NAME';" | xargs`
if [[ $result == "1" ]]; then
  echo "$DB_NAME DB already exists"
else
  echo "$DB_NAME DB does not exist, creating it ..."

  psql -v ON_ERROR_STOP=on -U "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE $DB_NAME WITH OWNER $POSTGRES_USER TEMPLATE template0 ENCODING 'UTF8';
    GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $POSTGRES_USER;
EOSQL
  result=$?
  if [[ $result == "0" ]]; then
    echo "$DB_NAME DB successfully created"

    psql -v ON_ERROR_STOP=on -U "$POSTGRES_USER" -d "$DB_NAME" -f /populate/DDL.sql

    echo "$DB_NAME DB successfully populated"
  else
    echo "$DB_NAME DB could not be created"
  fi
fi