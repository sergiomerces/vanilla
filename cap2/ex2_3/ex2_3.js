function mostrarPromocao(){
    const inVeiculo = document.getElementById('inVeiculo');
    const inPreco = document.getElementById('inPreco');
    const outVeiculo = document.getElementById('outVeiculo');
    const outEntrada = document.getElementById('outEntrada');
    const outParcelas = document.getElementById('outParcelas');

    const preco = Number(inPreco.value);
    const entrada = preco / 2;
    const parcelas = (preco - entrada) / 12;

    outVeiculo.textContent = inVeiculo.value;
    outEntrada.textContent = `Entrada de R$ ${entrada.toFixed(2)}`;
    outParcelas.textContent = `12x de R$ ${parcelas.toFixed(2)}`;
}

const btnPromocao = document.getElementById('btnPromocao');
//btnPromocao.addEventListener('click', mostrarPromocao);
btnPromocao.onclick = mostrarPromocao;