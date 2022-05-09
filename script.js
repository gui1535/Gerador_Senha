let sld = document.querySelector('#slide');
let btn = document.querySelector('#button');
let tamanhoSenha = document.querySelector('#valor');
let senha = document.querySelector('#password');
let containerSenha = document.querySelector('#container-senha');


let caracteres = "abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

let novaSenha = "";

tamanhoSenha.innerHTML = sld.value;

sld.oninput = function () {
    tamanhoSenha.innerHTML = this.value;
}

function gerarSenha() {

    let pass = "";

    for (let i = 0, n = caracteres.length; i < sld.value; i++) {
        pass += caracteres.charAt(Math.floor(Math.random() * n));
    }
    containerSenha.classList.remove('hide');
    senha.innerHTML = pass;
    novaSenha = pass;
}

function copiarSenha(){
    alert('Senha copiada com sucesso!');
    navigator.clipboard.writeText(novaSenha);
}