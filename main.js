// подключение Electron.JS
const { app, BrowserWindow }= require("electron");

// SET ENV
process.env.NODE_ENV = "production";

function createWindow() {
    const win = new BrowserWindow({
        width: 1440,
        height: 1080,
        frame: false,
        title: "Discord",
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        }
    });

    // загрузка index.html
    win.loadFile("index.html");

    // загрузка Инструментов разработчика
    // win.webContents.openDevTools();
}

// создание окна
app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") {
        app.quit();
    }
});

// проверка на наличие открытых окон
app.on("activate", () => {
    // если открытых окон нет, то создаем окно
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})