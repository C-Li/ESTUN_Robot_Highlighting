@echo off
echo Building ESTUN RCS2 Robot Language Syntax Highlighting Extension...
echo Please make sure Node.js and npm are installed
echo.

REM Check if vsce is installed
where vsce >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Installing vsce...
    npm install -g vsce
)

REM Package the extension
echo Packaging extension...
vsce package

echo.
echo Build completed! The generated .vsix file can be used to install the extension.
pause