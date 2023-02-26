//Capturando dados de formulários e retornando resposta no documento

/*Eventos & funções
De acordo com um evento do usuário o JavaScript pode executar ações programadas em funções

Eventos:
onClick - clique do mouse

onDblClicck - clique duplo

onMouseUp - quando o ponteiro do mouse entra no elemento

onMouseOver - quando o ponteiro do mouse sai do elemento

onChange

onKeyPress - quando o botão é pressionado e solto

onKeyDown - quando o botão é presionado para baixo

onKeyUp - quando o botão pressionado sobe novamente

onLoad

onSubmit

onFocus - quando o elemento está focado

onBlur - quando o elemento está fora de foco
*/

/*
Dados podem ser capturados pelo:
id
getElementById('chave');

*/

/*
Propriedades para inserção de strings no documento
.textContent - insere string num elemento HTML

.innerHTML - insere string num elemento HTML

.value - captura o valor de um elemento 

*/

/*
Manipulador de eventos inline
O elemento de gatilho recebe o evento onclick=("funcao()") e a função n código HTML
*/

function olaVoce() {
    const nome = document.getElementById('name').value;
    
    document.getElementById('resposta').textContent = `Olá ${nome}!`;
}



/*
Rotina de tratamento de eventos DOM

O código JS fica totalmente desacoplado do HTML, não é necessário informar o evento na tag HTML.

Ao invés disso transformamos o elemento HTML em um objeto JS o evento se torna um método e a função uma propriedade

Essa técnica é limitda por impedir que anexemos mais de uma função ao mesmo evento
*/

function mostrarCidade() {
    const cidade = document.getElementById('inpCidade').value;

    document.getElementById('pCidade').textContent = `${cidade} é uma bela cidade!`;
}

const btnCidade = document.getElementById('btnCidade');
btnCidade.onclick = mostrarCidade;

/*
Uso de listeners (ouvintes) de eventos
Nesse modelo é possível registrar múltiplas funções para um mesmo evento, é a forma mais recomendada.

onButtonClick
*/

function exibirLinguagem() {
    const linguagem = document.getElementById('inpLinguagem').value;

    document.getElementById('pLinguagem').textContent = `${linguagem} é uma ótima esclolha!`;
}

const btnLinguagem = document.getElementById('btnLinguagem');
btnLinguagem.addEventListener('click', exibirLinguagem);