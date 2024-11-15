@echo off
REM Navegar para o diretório raiz do projeto
cd /d %~dp0

REM Verificar se o diretório auth-api existe
if exist auth-api (
    REM Iniciar auth-api em uma nova janela de terminal
    echo Iniciando auth-api...
    start cmd /k "cd auth-api && npm start"
) else (
    echo O diretório auth-api não foi encontrado.
)

REM Verificar se o diretório api-gastos existe
if exist api-gastos (
    REM Iniciar api-gastos em uma nova janela de terminal
    echo Iniciando api-gastos...
    start cmd /k "cd api-gastos && npm start"
) else (
    echo O diretório api-gastos não foi encontrado.
)

echo Todas as APIs foram iniciadas, se os diretórios existirem.
pause
