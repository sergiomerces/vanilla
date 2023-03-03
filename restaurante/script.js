function calcularPreco() {
    let preco = Number(document.getElementById('preco').value);
    let consumo = Number(document.getElementById('consumo').value);
    let valorAPagar = preco * consumo / 1000;
    let total = document.getElementById('total');

    total.textContent = 'Valor a pagar R$ ' + valorAPagar.toFixed(2);
}

const botao = document.getElementById('botao');
botao.onclick = calcularPreco;