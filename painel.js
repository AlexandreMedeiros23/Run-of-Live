if (localStorage.getItem("adminLogado") !== "true") {
    window.location.href = "login.html";
}function Site() {
    window.location.href = "index.html";

}

function BaixarLista(){
    alert("Em breve! Donwload da lista em EXCEL😉");
}

function Sair() {
    window.location.href = "login.html";

}
function Sair() {
    localStorage.removeItem("adminLogado");
    window.location.href = "login.html";
}