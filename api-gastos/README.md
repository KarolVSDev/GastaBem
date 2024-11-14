Api para gerenciar gastos

Pré-requisitos
Antes de começar, certifique-se de ter o seguinte instalado:

Laragon (versão completa, incluindo suporte ao MySQL)
Node.js (já vem com o Laragon, mas é recomendado verificar se está atualizado)
Passos para Configuração

1. Clonar o Repositório
Abra o terminal e execute:
git clone https://github.com/EmanuelBastoss/gastos-api.git


2. Configurar o Laragon
Abra o Laragon e inicie o Apache e MySQL.
No Laragon, crie um banco de dados chamado ApiGastos:
Vá para Menu > Banco de Dados > MySQL > phpMyAdmin.
Crie o banco de dados ApiGastos.


3. Configurar o Projeto
Navegue até o diretório do projeto clonado:
cd gastos-api

Instale as dependências do projeto:
npm install


Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:
DB_NAME=ApiGastos
DB_USER=root
DB_PASSWORD=
DB_HOST=localhost
DB_DIALECT=mysql
PORT=3000

Ajuste as credenciais do banco de dados se necessário.

4. Executar a API
Inicie a API com o comando:

node index.js
A API estará rodando na porta 3000. Você verá a mensagem:
API rodando na porta 3000
Conectado ao banco de dados e tabelas criadas

5. Testando a API
Você pode testar os endpoints utilizando o index.html da pasta ou a ferramenta Postman.

GET /gastos: Lista todos os gastos.
POST /gastos: Adiciona um novo gasto.
PUT /gastos/
: Atualiza um gasto existente.
DELETE /gastos/
: Remove um gasto.


Estrutura do Projeto
index.js: Arquivo principal da API.
config/database.js: Configuração do banco de dados.
models/Gasto.js: Modelo de dados para os gastos.
.env: Arquivo de configuração de variáveis de ambiente.
