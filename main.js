import { app, BrowserWindow } from 'electron';

let mainWindow = null;
let path = app.getPath('exe')

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  console.log(path)
  mainWindow = new BrowserWindow({width: 800, height: 600, globals: {id: 17}});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});