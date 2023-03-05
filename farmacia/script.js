function exibirPromocao() {
    const medicamento = document.getElementById('medicamento').value;
    let preco = Number(document.getElementById('preco').value);

    let desconto = (preco * 2) - Math.round(preco * 2);
    let valorPromocao = (preco * 2) - desconto;

    const outMedicamento = document.getElementById('outMedicamento');
    const outPromocao = document.getElementById('outPromocao');

    outMedicamento.innerHTML = `${medicamento}`;
    outPromocao.innerHTML = `Leve 2 dois e pague R$ ${valorPromocao.toFixed(2)}`;

    preco = 0.00;
}

const botao = document.getElementById('botao');
botao.onclick = exibirPromocao;