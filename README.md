# torinoCars_back
Proyecto codo a codo backend 

## Uso
Para conectarse a la base de datos es necesario configurar variables de entorno. 
disponibles en el archivo .env.template

## Usuarios

### Crear

```shell
curl --location 'https://mikim.alwaysdata.net/clientes' \
--header 'Content-Type: application/json' \
--data '{
    "name": "manholsolis",
    "email": "emjojail",
    "phone":"45554545",
    "direccion": "Calle Sin nombre 123",
    "password": "password",
    "repeatPassword": "password"
}'
```

### Listar

```shell
curl --location 'https://mikim.alwaysdata.net/clientes' \
--data ''
```

### Actualizar

```shell
curl --location --request PUT 'https://mikim.alwaysdata.net/clientes/1' \
--header 'Content-Type: application/json' \
--data '{
    "name": "jota",
    "email": "email",
    "phone":"7777777777",
    "direccion": "Calle Sin nombre 123",
    "password": "password",
    "repeatPassword": "password"
}'
```

### Borrar

```shell
curl --location --request DELETE 'https://mikim.alwaysdata.net/clientes/7' \
--data ''
```
