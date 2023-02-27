function exibirPromocao() {
    const veiculo = document.getElementById('inVeiculo').value;
    const preco = Number(document.getElementById('inPreco').value);
    const entrada = preco * 0.5;
    const parcela = (preco - entrada) / 12;

    document.getElementById('outVeiculo').textContent = veiculo;
    document.getElementById('outEntrada').textContent = `Entrada: R$ ${entrada.toFixed(2)}`;
    document.getElementById('outParcela').textContent = `Parcelas: 12x de R$ ${parcela.toFixed(2)}`;
}

const botao = document.getElementById('inBotao');
botao.addEventListener('click', exibirPromocao);