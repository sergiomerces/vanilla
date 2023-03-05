function verPromocao() {
    const produto = document.getElementById('produto').value;
    const preco = Number(document.getElementById('preco').value);
    const promocao = (preco * 2) + (preco * 0.5);
    const out1 = document.getElementById('out1');
    const out2 = document.getElementById('out2');
    out1.textContent = `${produto} - Promoção: Leve 3 por R$: ${promocao.toFixed(2)}`;
    out2.textContent = `O 3° produto custa apenas R$: ${(preco * 0.5).toFixed(2)}`;
}

const botao = document.getElementById('botao');
botao.onclick = verPromocao;

