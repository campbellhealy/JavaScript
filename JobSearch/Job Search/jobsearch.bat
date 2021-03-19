REM https://www.youtube.com/watch?v=v7cprTuAnlA
echo off
mode con: cols=57 lines=13
cls
title Job Searcher
echo Job Searcher Activated
echo - - - - - - - - - - - 
echo *** Have Fun ***
echo - - - - - - - - - - -  

:choice
set /P c=Are you sure you want to continue[A]dzuna/[N]?
if /I "%c%" EQU "A" goto :searcher
if /I "%c%" EQU "N" goto :stoppar
goto :choice

:searcher
cls
echo Job Searcher Activated
echo ***********************
start cmd /c ".\server.bat"
start cmd /c ".\webserver.bat"
echo *** Waiting for Server ***
timeout /t 10
echo *** Opening Web App ***
start "" http://localhost:1234
timeout /t 2
exit


:stoppar
echo - - - - - - - - - - - 
echo "Good Choice, Operation stops..."
echo - - - - - - - - - - - 
timeout /t 5
exit