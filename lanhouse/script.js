function calcularValor() {
    const preco = Number(document.getElementById('preco').value);
    const tempo = Number(document.getElementById('tempo').value);
    const valorPagar = (tempo % 15) === 0 ? (tempo / 15) * preco : ((Math.floor(tempo / 15) * preco) + preco);
    const outValor = document.getElementById('outValor');
    outValor.textContent = `Valor a pagar R$: ${valorPagar.toFixed(2)}`;
}

const botao = document.getElementById('botao');
botao.onclick = calcularValor;