const inHora = document.getElementById('inHora');
const outResposta = document.getElementById('outResposta');

function exibirHorario() {

    let hora = Number(inHora.value);

    if(!hora || isNaN(hora)) {
        alert('Informe a hora no Brasil corretamente!');
        inHora.focus();
        return;
    }

    let horaFranca = hora + 5;

    if(hora > 24)
        horaFranca = horaFranca - 24;

    outResposta.textContent = `Hora na França: ${horaFranca.toFixed(2)}`;

}

const btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', exibirHorario);