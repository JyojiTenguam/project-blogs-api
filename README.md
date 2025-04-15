# 📝 Blogs API

Uma API RESTful desenvolvida com Node.js, Express, Sequelize e MySQL que simula o back-end de uma aplicação de blogs. Permite cadastrar usuários, criar posts, editar, deletar e fazer buscas com autenticação via JWT.

## ✨ Demonstração

> Projeto sem interface visual. A API pode ser testada por ferramentas como Postman ou Insomnia.

## 📋 Índice

- [Sobre](#-sobre)
- [Habilidades desenvolvidas](#-habilidades-desenvolvidas)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Como rodar o projeto](#-como-rodar-o-projeto)
- [Autor](#-autor)

## 💡 Sobre

Neste projeto foi desenvolvida uma API com:

- Cadastro e login de usuários com autenticação JWT
- CRUD de posts de blog
- Relação entre usuários, categorias e posts
- Validações de permissões e integridade dos dados

O foco principal foi consolidar conhecimentos em Sequelize, REST e autenticação.

## 🛠️ Habilidades desenvolvidas

- Autenticação e autorização com JWT
- Modelagem de dados com Sequelize (ORM)
- Criação de relacionamentos entre tabelas
- Boas práticas de API REST
- Validações e middlewares customizados
- Uso de migrations e seeds com Sequelize

## 🧪 Tecnologias utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- JSON Web Token (JWT)
- JavaScript ES6+
- Docker & Docker Compose

## 🚀 Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/tryber/project-blogs-api.git
```

2. Acesse a pasta do projeto

```bash
cd project-blogs-api
```

3. Instale as dependências

```bash
npm install
```

4. Configure o banco de dados

```bash
docker-compose up -d
```

5. Aplique as migrations e seeds

```bash
docker-compose up -d
```

6. Inicie o servidor

```bash
npm run start
```
>A aplicação abrirá no navegador em http://localhost:3000

## 👤 Autor

Este projeto foi desenvolvido como parte do curso de Desenvolvimento Web da Trybe, por Jyoji Tenguam.

```
Falta 3 requisitos Bônus.
