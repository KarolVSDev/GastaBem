# GastaBem Web

## Sumário

- [Introdução](#introdução)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Instalação](#instalação)
- [Criação dos Bancos de Dados e instalação de dependencias](#criação-dos-bancos-de-dados-e-instalação-de-dependencias)
- [Execução do Projeto](#execução-do-projeto)


## Introdução

GastaBem é um projeto web que ajuda os usuários a gerenciar seus gastos. O projeto é composto por duas APIs (`auth-api` e `api-gastos`) e um frontend em React.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte software instalado:

- **Laragon:** Para gerenciar o ambiente de desenvolvimento local. https://laragon.org/download/
- **Node.js:** Para executar o servidor e o frontend. https://nodejs.org/pt
- **npm:** Gerenciador de pacotes do Node.js. 
- **MySQL:** Banco de dados gerenciado pelo Laragon.

## Configuração do Ambiente

1. **Inicie o Laragon:**
   - Abra o Laragon e inicie o servidor Apache e MySQL.

2. **Configurar Variáveis de Ambiente:**

**Ajuste as configurações no arquivo .env conforme necessário para seu ambiente.**


   - Crie um arquivo `.env` na raiz de cada API (`auth-api` e `api-gastos`) com o seguinte conteúdo:

     auth
     ```
     JWT_SECRET=seusegredo
     PORT=5000
     DB_NAME=auth_db
     DB_USER=root
     DB_PASSWORD=
     DB_HOST=127.0.0.1
     DB_PORT=3306
     ```
      gastos
     ```
      DB_HOST=localhost
      DB_USER=root
      DB_PASSWORD=
      DB_NAME=ApiGastos
      DB_PORT=3306
      PORT=3000
     ```

## Instalação

1.**inicie o laragon antes dessa parte**
2.**inicie o laragon antes dessa parte**

1. **Clone o Repositório:**

   - **abra o cmd e use os comandos:**
   - ` cd C:\laragon\www `
   - ` git clone https://github.com/seu-usuario/gastabem.git `
   - ` cd gastabem `

## criação dos bancos de dados e instalação de dependencias
- **criação dos bancos de dados e instalação de dependencias**

2. **Execute o Script de Configuração:**

- **Na pasta Raiz execute os comandos:**

- ``npm install``

**comandos na pasta Raiz para criar os bancos**

-`` npm run db:create --workspace=auth-api ``
-`` npm run db:migrate --workspace=auth-api ``


-`` npm run db:create --workspace=api-gastos ``
-`` npm run db:migrate --workspace=api-gastos ``

## Execução do Projeto
3. **Execução do Projeto**

- execute o ``start-all.bat`` para iniciar o frontend e as apis em novas janelas de terminal.

**ou**

- **Iniciar as APIs:**
- `` cd C:\laragon\www\GastaBem ``
-`` npm run start:auth-api ``
-`` npm run start:api-gastos ``

4. **Iniciar o Frontend:**

- **em um terminal diferente**
- `` cd C:\laragon\www\GastaBem ``
- ` npm run start:frontend`

**Acessar a Aplicação:**
Abra o navegador e acesse ` http://localhost:3000 ` para visualizar o frontend.


