## Endpoints

* /auth/register
```
POST http://ec2-34-238-118-3.compute-1.amazonaws.com:3005/auth/register

{
   "name": "Open City",
   "email": "yasmin.romi@al.infnet.edu.br",
   "password": "123qwe"
}
```

* /auth/authenticate
```
POST http://ec2-34-238-118-3.compute-1.amazonaws.com:3005/auth/authenticate

{
   "email": "yasmin.romi@al.infnet.edu.br",
   "password": "123qwe"
}
```

* /message/register
```
POST http://ec2-34-238-118-3.compute-1.amazonaws.com:3005/message/register

{
   "id": "<CPF>_<CREATED_AT>",
   "from": "<CPF>/<CNPJ>",
   "to": "<CPF>/<CNPJ>",
   "type": "mobilidade-urbana_reclamacao",
   "content": "atraso de frota de onibus"
}
```
