function Entrar() {
    // dados digitados
    let emailDigitado = document.getElementById("email").value;
    let senhaDigitada = document.getElementById("senha").value;

    // login correto (simulado)
    let emailCorreto = "alexandremedeiros355@gmail.com";
    let senhaCorreta = "230206";

    // validação
    if (emailDigitado === emailCorreto && senhaDigitada === senhaCorreta) {

        // salva que o admin está logado
        localStorage.setItem("adminLogado", "true");

        // entra no painel
        window.location.href = "painel.html";

    } else {
        document.getElementById("erro").innerText =
            "Email ou senha incorretos";
    }
}
