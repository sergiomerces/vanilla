function calcularPeso() {
    alert('Botão calcular OK!');
}

function limpar() {
    alert('Botão limpar OK!');
}


const calcular = document.getElementById('calcular');
const limpar = document.getElementById('limpar');

calcular.addEventListener('click', calcularPeso);
limpar.addEventListener('click', limpar);