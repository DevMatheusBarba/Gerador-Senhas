let sliderElemento = document.querySelector("#slider");
let botaoElemento = document.querySelector("#botao");

let valorSenha = document.querySelector("#valor");
let password = document.querySelector("#senha")

let esconder = document.querySelector("#conteiner-senha");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!";

let novaSenha = "";

valorSenha.innerHTML = sliderElemento.value;
slider.oninput = function () {
    valorSenha.innerHTML = this.value
}

function geradorSenha() {
    let senha = "";
    for (let i = 0, n = charset.length; i < sliderElemento.value; i++) {
        senha += charset.charAt(Math.floor(Math.random() * n))
    }
    esconder.classList.remove("esconder")
    password.innerHTML = senha;
    novaSenha = senha
}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha).then(() => {
        alert("Ok, texto copiado");
    });
}