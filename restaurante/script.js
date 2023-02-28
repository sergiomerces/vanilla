function calcularPreco() {
    const preco = document.getElementById('preco').value;
    const consumo = document.getElementById('consumo').value;
    const valoAPagar = preco * consumo / 1000;
    
    
    document.getElementById('total').textContent = valoAPagar;
}

const botao = document.querySelector('button#botao');
botao.onclick = calcularPreco;