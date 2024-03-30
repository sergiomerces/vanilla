function dizerOla(){
    const inpNome = document.getElementById('nome');
    document.getElementById('resposta').textContent = `Olá, ${inpNome.value}!`;
}

const btnMostrar = document.getElementById('mostrar');
//btnMostrar.onclick = dizerOla;
btnMostrar.addEventListener('click', dizerOla);

/*
Ao escrever uma função JScript
1. capturar o conteúdo do elemento numa variável
2. através do método atribuir um valor ao elemento resposta
3. a captura do botão deve ser de escopo global (fora daschaves)
4. para chamar a função atribuir seu nome a variavel e um evento
5. o metodo addEventListerner permite atribuir mais de um evento ao mesmo elemento
*/