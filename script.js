function confirmarPresenca() {

    // pegar dados do formulário
    let nome = document.getElementById("nome").value;
    let celular = document.getElementById("celular").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;

     // VALIDAÇÃO: campos vazios
    if (nome === "" ||  celular === "" ||  idade === "" || email === "")  {
        alert("Por favor, Preencha todos os campos!");
        return; // PARA AQUI
    }

        // gerar número do corredor (1 a 1000)
    let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;

    // Transforma em texto e adiciona os zeros à esquerda (ex: 0001)
    let numeroFormatado = numeroAleatorio.toString().padStart(4, '0');

     // salvar dados no navegador (Simulando Banco)
    localStorage.setItem("nome", nome);
    localStorage.setItem("celular", celular);
    localStorage.setItem("idade", idade);
    localStorage.setItem("numeroCorredor", numeroFormatado);
    localStorage.setItem("email", email);

    // ir para página de obrigado
    window.location.href = "obrigado.html";

}
function paineladm() {
    window.location.href = "login.html";
}
