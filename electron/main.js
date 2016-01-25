'use strict'
let electron = require('electron');
let app = electron.app;
let BrowserWindow = electron.BrowserWindow;

app.on('window-all-closed', ()=>{ 
  if (process.platform != 'darwin') 
    app.quit()
  })

app.on('ready', ()=> {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.on('closed', ()=>  mainWindow = null);
});