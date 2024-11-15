@echo off
REM Navegar para o diretório raiz do projeto
cd /d %~dp0

REM Função para verificar o código de saída do último comando
:checkError
if %errorlevel% neq 0 (
    echo Ocorreu um erro. Abortando o script.
    pause
    exit /b %errorlevel%
)
exit /b 0

REM Instalar todas as dependências usando workspaces
echo Instalando todas as dependências...
npm install
call :checkError

REM Criar banco de dados para auth-api se não existir
echo Criando banco de dados para auth-api se não existir...
mysql -u root -e "CREATE DATABASE IF NOT EXISTS auth_db;"
call :checkError

REM Executar migrações para auth-api
cd auth-api
npx sequelize-cli db:migrate
call :checkError
cd ..

REM Criar banco de dados para api-gastos se não existir
echo Criando banco de dados para api-gastos se não existir...
mysql -u root -e "CREATE DATABASE IF NOT EXISTS gastos_db;"
call :checkError

REM Executar migrações para api-gastos
cd api-gastos
npx sequelize-cli db:migrate
call :checkError
cd ..

REM Adicionar node_modules e setup.bat ao .gitignore
echo Adicionando node_modules e setup.bat ao .gitignore...
echo node_modules/>> .gitignore
echo setup.bat>> .gitignore

REM Excluir o próprio arquivo .bat
echo Excluindo setup.bat...
del "%~f0"

echo Configuração concluída com sucesso!
pause
