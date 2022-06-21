# States Food

Aplicação consiste no desenvolvimento de um APP de delivery fullstack. Fazendo consultas a dados pré cadastrados no banco de dados.

As primeiras funções implementadas são:

-Tela de login com autenticação e validação no banco por email e senha 
-Controle de senha criptografada
-Renderizar na tela principal os restaurantes
-Campo de busca, podendo buscar pelo nome do restaurante, descrição, nome do prato/bebida e descrição do prato/bebida.
-Busca de localização do usuário

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

<!-- # Executando

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
  cd grao
```

Instando as dependências

```bash
  npm install
```

Precisamos dar o build no turborepo. fazendo isso o build é aplicado tanto pro backend como pro frontend

```bash
  yarn build
```

Agora para rodar o projeto no modo de produção já integrado e funcionando.

```bash
  yarn start
```

## Pronto agora o projeto já está rodando.

```bash
  Frontend: http://localhost:3000
  Backend: http://localhost:3001
```


</details> -->

# Tech Stack

#### Front-end
- React
- React Hooks
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
- MD5
- JWT
- Eslint
- Git MSG Linter
- Lint-Staged

## Authors

- [Fernando Segregio](https://github.com/FernandoSegregio)
