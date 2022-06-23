# States Food

Aplicação consiste no desenvolvimento de um APP de delivery fullstack. Fazendo consultas a dados pré cadastrados no banco de dados.

As primeiras funções implementadas são:

-Tela de login com autenticação e validação no banco por email e senha 
-Controle de senha criptografada
-Renderizar na tela principal os restaurantes
-Campo de busca, podendo buscar pelo nome do restaurante, descrição, nome do prato/bebida e descrição do prato/bebida.
-Busca de localização do usuário

# Link Aplicação

- Deploy Front-end no Vercel: 
https://states-food.vercel.app

  usuario teste: email@email.com.br
<br/>senha teste: 123456

- Deploy Back-end e banco de dados no Railway:
https://states-food-production.up.railway.app/

## Demo


![](./frontend/states_food.gif)


# Aplicação



## Backend

Backend desenvolvido utilizando express, prisma e MySQL. possui 2 endpoints sendo possível logar, buscar por restaurantes, buscar por pratos.
Na parte de criação todas as senhas são criptografas antes de ser armazenadas no banco de dados utilizando a biblioteca MD5.
Foi utilizado um middleware validção do token do usuario logado, utilizando a biblioteca JWT para geração do token na hora do login.
Na listagem é possível ser feita com ou sem filtros, ambas contando com paginação offset.

## Frontend

Frontend foi feito com React, e Styled Components.

# Executando

## Rodar Localmente

Para rodar a aplicação você deve rodar localmente com node.

<details>

<summary><b>Node</b></summary>

## Pré-Requisitos

Para rodar a aplicação é necessário ter instalado o [Node](https://nodejs.org/en/) e um banco de dados funcionando [MySQL](https://www.mysql.com/)

## Rodando no Node

O Projeto conta com um repositório monorepo utilizando yarn workspaces, e turborepo, para ligar o projeto só precisamos fazer o build e depois o start. veja abaixo:

Clone o projeto

```bash
  git clone git@github.com:FernandoSegregio/states-food.git
```

Navegue até o diretório do projeto

```bash
  cd states-food
```

  
<details>
  

<summary><b>Back-end</b></summary>


Entre na pasta backend

```bash
  cd backend
```
  
Instalando as dependências
```bash
  npm install
```
  
Criando as variáveis de ambiente

Digite o comando abaixo
```bash
  touch .env
```
Abra o arquivo e insira as seguintes informações
```bash
  
DATABASE_URL="mysql://root:password@localhost:3306/grao" 
JWT_SECRET="batatinha"
VITE_API_URL=http://localhost:3001
```
> Onde **root** é seu usuário e **password** é sua senha.
  


Iniciando o Prisma e populando o banco
```bash
  npx prisma generate && npx prisma migrate dev
```

Iniciando o Back-end
```bash
 npm run dev
```
  
</details>
  

<details>
  
<summary><b>Front-end</b></summary>
  
Entre na pasta frontend

```bash
  cd frontend
```
  
Digite o comando abaixo
```bash
  touch .env
```
Abra o arquivo e insira as seguintes informações
```bash
VITE_API_URL=http://localhost:3001/
VITE_YOUR_KEY_GOOGLE=[insira aqui sua key da api de localização do google]
```
  
Instalando as dependências
```bash
  npm install
```

Iniciando o Front-end
```bash
 npm run dev
```
</details>


## Agora o projeto já está rodando.

```bash
  Frontend: http://localhost:3000
  Backend: http://localhost:3001
```


</details>

# Tech Stack

#### Front-end
- React
- React Hooks
- Gerenciamento de estado
- Context
- Styled-Components
- Axios
- Eslint
- Git MSG Linter
- Nanoid

#### Back-end

- Node
- JavaScript
- Express
- Prisma
- MySQL
- Argon2
- JWT
- Eslint
- Git MSG Linter

## Authors

- [Fernando Segregio](https://github.com/FernandoSegregio)
