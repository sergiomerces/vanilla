function verPromocao(){
    const inProduto = document.getElementById('inProduto');
    const inPreco = document.getElementById('inPreco');
    const outMensagem1 = document.getElementById('outMensagem1');
    const outMensagem2 = document.getElementById('outMensagem2');

    const preco = Number(inPreco.value);
    const leve3Por = preco * 2 + preco * 0.5;
    const terceiroProduto = preco * 0.5;

    outMensagem1.textContent = `${inProduto.value} - Promoção Leve 3 por R$ ${leve3Por.toFixed(2)}`;
    outMensagem2.textContent = `O 3º produto custa apenas R$ ${terceiroProduto.toFixed(2)}`;
}

const btnVerPromocao = document.getElementById('btnVerPromocao');
btnVerPromocao.addEventListener('click', verPromocao);