'use strict'

const { app, BrowserWindow, ipcMain } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    // fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })
  win.webContents.openDevTools()
  win.menuBarVisible = false
  win.loadFile('./src/index.html')
}

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('menu-options', (events, args) => {
  if (args === 'quit') {
    app.quit()
  }
  if (args === 'restart') {
    console.log('restart?', args)
    restartApp()
  }
})
