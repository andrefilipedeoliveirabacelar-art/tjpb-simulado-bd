@echo off
echo ====================================================
echo   SUBIR SIMULADOR TJPB NO GITHUB
echo ====================================================
echo.
echo Certifique-se de ter criado um repositorio no GitHub: https://github.com/new
echo Nome sugerido: tjpb-simulado-bd
echo.
set /p REPO_URL="Cole a URL do seu repositorio (ex: https://github.com/SEU_USER/tjpb-simulado-bd.git): "

if "%REPO_URL%"=="" (
    echo URL vazia. Abortando.
    pause
    exit /b
)

git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main
git add .
git commit -m "feat: simulador completo tjpb analista banco de dados fgv"
git push -u origin main

echo.
echo ====================================================
echo   PROJETO ENVIADO COM SUCESSO AO GITHUB!
echo ====================================================
echo Agora voce pode conectar esse repositorio na Vercel (https://vercel.com)
pause
