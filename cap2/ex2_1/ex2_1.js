function dizerOla(){
    const inpNome = document.getElementById('nome');
    document.getElementById('resposta').textContent = `Olá, ${inpNome.value}!`;
}

const btnMostrar = document.getElementById('mostrar');
btnMostrar.onclick = dizerOla;