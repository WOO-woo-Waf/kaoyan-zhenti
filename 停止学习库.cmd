@echo off
cd /d "%~dp0"
node tools\stop-study.mjs
if errorlevel 1 pause
