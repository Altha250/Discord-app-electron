const remote = require("electron").remote;

const wnd = remote.getCurrentWindow();

document.addEventListener("DOMContentLoaded", () => {     
    let btnTurn = document.querySelector(".btnTurn");
    let btnExpand = document.querySelector(".btnExpand");
    let btnClose = document.querySelector(".btnClose");

    // сворнуть окно приложения
    btnTurn.addEventListener("click", () => {
        wnd.minimize();
    });

    // разворачивание окна приложения
    btnExpand.addEventListener("click", () => {
        // если окно свернуто, то развернуть
        if(!wnd.isMaximized()) {
            wnd.maximize();
        } else {
            wnd.unmaximize();
        }
    });

    // закрыть приложение
    btnClose.addEventListener("click", () => {
        wnd.close();
    })
});