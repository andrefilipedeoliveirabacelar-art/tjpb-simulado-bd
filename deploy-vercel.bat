@echo off
echo ====================================================
echo   PUBLICAR SIMULADOR TJPB NA VERCEL
echo ====================================================
echo.
echo Executando deploy via Vercel CLI...
echo Se for a primeira vez, o terminal pedira para voce fazer login no navegador.
echo.
npx --yes vercel --prod
echo.
pause
