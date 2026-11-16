@echo off
cd /d "%~dp0"
node tools\launch-study.mjs
if errorlevel 1 pause
