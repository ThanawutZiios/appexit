function btnResetStatusClick() {
    Windows.Storage.ApplicationData.current.localSettings.values["data"] = "reset";
    document.getElementById("lblStatus").innerText = Windows.Storage.ApplicationData.current.localSettings.values["data"];
}
function btnRegetStatusClick() {
    document.getElementById("lblStatus").innerText = Windows.Storage.ApplicationData.current.localSettings.values["data"];
}
function btnOpenWindowClick() {
    window.open("index.html");
}

function start() {
    document.getElementById("lblStatus").innerText = Windows.Storage.ApplicationData.current.localSettings.values["data"];
    document.getElementById("btnResetStatus").addEventListener("click", btnResetStatusClick);
    document.getElementById("btnRegetStatus").addEventListener("click", btnRegetStatusClick);
    document.getElementById("btnOpenWindow").addEventListener("click", btnOpenWindowClick);
}

start();
window.onbeforeunload = function onbeforeunloadEvent() {
    Windows.Storage.ApplicationData.current.localSettings.values["data"] = "set data from onbeforeunload event";
}