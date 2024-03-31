function mostrarPromocao() {
    const inMedicamento = document.getElementById('inMedicamento');
    const inPreco = document.getElementById('inPreco');
    const outMedicamento = document.getElementById('outMedicamento');
    const outValor = document.getElementById('outValor');

    const preco = Number(inPreco.value);
    const desconto = (preco * 2) - (Math.floor(preco) * 2);
    const totalAPagar = (preco *2) - desconto;

    outMedicamento.textContent = inMedicamento.value;
    outValor.textContent = `Leve 2 unidades por R$ ${totalAPagar.toFixed(2)}`;
}

const btnMostrarPromocao = document.getElementById('btnMostrarPromocao');
btnMostrarPromocao.addEventListener('click', mostrarPromocao);