@echo off
cd /d "%~dp0"
echo Iniciando servidor local em http://localhost:3000 ...
start "" "http://localhost:3000"
npx serve -l 3000 dist
