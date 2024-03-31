function calcularPreco(){
    const inPreco = document.getElementById('inPreco');
    const inConsumo = document.getElementById('inConsumo');
    const outValor = document.getElementById('outValor');
    
    const preco = Number(inPreco.value);
    const consumo = Number(inConsumo.value);
    const totalAPagar = (preco * consumo) / 1000;

    outValor.textContent = `Total a pagar R$ ${totalAPagar.toFixed(2)}`;
}

const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcularPreco);
