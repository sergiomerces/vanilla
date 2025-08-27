const inNumero = document.getElementById('inNumero');
const outResposta = document.getElementById('outResposta');

function exibirRaiz(){

    let numero = Number(inNumero.value);

    if(!numero || isNaN(numero)){
        alert('Informe um número para continuar...');
        inNumero.focus();
        return;
    }

    let raiz = Math.sqrt(numero);
    let decimal = raiz - Math.floor(raiz);

    if(decimal !== 0){
        outResposta.textContent = `O número ${numero} não possui raiz exata.`;
    } else {
        outResposta.textContent = `A raiz de ${numero} é ${raiz}!`;
    }

}

const btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', exibirRaiz);