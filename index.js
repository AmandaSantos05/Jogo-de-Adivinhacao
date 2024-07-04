let numerosSorteados = [];
let limiteNumeroEscolhido = 10;
let numeroSecreto = gerarNumeroAleatorio();

const mensagemInicial = () => {
    exibirTextoNaTela('resposta', 'Digite um número entre 1 e 5');
}

const gerarNumeroAleatorio = () => {
    let numeroEscolhido = Math.floor(Math.random() * limiteNumeroEscolhido + 1);
    let limiteNumerosSorteados = numerosSorteados.length;
    if (limiteNumerosSorteados == limiteNumeroEscolhido) {
        numerosSorteados = [];
    }
    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados)
        return numeroEscolhido;
    }
}


const exibirTextoNaTela = (tag, texto) => {
    let campo = document.getElementById(tag);
    campo.textContent = texto;
}

const verificarChute = () => {
    let chute = parseInt(document.getElementById("numero").value);
    console.log(numeroSecreto);

    if (chute > 5) {
        exibirTextoNaTela('resposta', 'Chute inválido!');
        limparCampo();
        return
    }

    if (chute === numeroSecreto) {
        exibirTextoNaTela('resposta', 'ACERTOU!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('resposta', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('resposta', 'O número secreto é maior');
        }
        limparCampo();
    }
}

const limparCampo = () => {
    let chute = document.getElementById('numero');
    chute.value = '';
}

const reiniciar = () => {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}