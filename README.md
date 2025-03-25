# SNOOPY PetShop
Projeto de estudos do ORM Prisma com MySQl no Node.JS
## Tecnologias
- Node.JS
- VsCode
- XAMPP
- Insominia
## Como testar
- 1 Clone este repositório
- 2 Abra com VsCode, abra um terminal CTRL + 'navegue até a pasta ./api e escute os seguintes comandos
```bash
cd api
npm install
```
- 3 Crie o arquivo .env na pasta api contendo a variável de ambiente de conexão
```js
DATABASE_URL="mysql://root@localhost:3306/petshop?schema=public&timezone=UTC"
```
- Navegar até o arquivo ./prisma/schema.prisma
```js
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Cliente{
  id Int @id @default(autoincrement())
  cpf String? @db.VarChar(20)
  nome String
  telefones Telefone[]
  pedidos Pedido[]
}

model Telefone{
  id Int @id @default(autoincrement())
  clienteId Int
  numero String @db.VarChar(20)
  tipo String @db.VarChar(20)
  cliente Cliente @relation(fields: [clienteId], references: [id])
}

model Pedido{
  id Int @id @default(autoincrement())
  clienteId Int
  data DateTime @default(now())
  produto String
  qtd Int
  preco Decimal @db.Decimal(10,2)
  subTotal Decimal? @db.Decimal(10,2)
  cliente Cliente @relation(fields: [clienteId], references: [id])
}
```
- Como os modelos prontos no schema Realizar a migração
```bash
npx prisma migrate dev --name init
```
- Caso seja necessário remover o banco de dados para testar a criação novamente
    - Exclua a pasta migrations
```bash
prisma migrate reset
```
- Editar o .gitignore
```js
node_modules
# Keep environment variables out of version control
.env
prisma/migrations
package-lock.json
```

