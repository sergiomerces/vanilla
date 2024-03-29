function dizerOla(){
    const inpNome = document.getElementById('nome');
    document.getElementById('resposta').textContent = `Olá, ${inpNome.value}!`;
}

const btnMostrar = document.getElementById('mostrar');
btnMostrar.onclick = dizerOla;

/*
Ao escrever uma função JScript
1. capturar o conteúdo do elemento numa variável
2. Aaravés do método atribuir um valor ao elemento resposta
3. a captura do botão deve ser de escopo global (fora daschaves)
4. Para chamar a função atribuir seu nome a variavel e um evento
*/