function calcularValorAPagar(){
    const inValor = document.getElementById('inValor');
    const inTempo = document.getElementById('inTempo');
    const outTotal = document.getElementById('outTotal');

    const valor = Number(inValor.value);
    const tempo = Number(inTempo.value);
    let total = Math.floor((tempo / 15) * valor);
    (tempo % 15 !== 0) ? total = total + valor : total = total;

    outTotal.textContent = `Valor a pagar R$ ${total.toFixed(2)}`;
}

const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcularValorAPagar);