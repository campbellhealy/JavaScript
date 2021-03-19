REM This is the webserver for constructing the information pulled from the API

REM Minimise the cosole
if not DEFINED IS_MINIMIZED set IS_MINIMIZED=1 && start "" /min "%~dpnx0" %* && exit

echo off
mode con: cols=52 lines=10
cls
title Job Searcher
echo Job Web Server Activated
echo - - - - - - - - - - - 
echo *** Have Fun ***
echo - - - - - - - - - - -  

cd ..
cd .\frontend
npm start
echo - - - - - - - - - - - 
echo "Job Searcher Web App activated"
echo - - - - - - - - - - - 