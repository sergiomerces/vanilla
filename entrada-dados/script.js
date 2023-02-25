/*
Entrada de dados com prompt()
Uma caixa de mengens por onde o usuário envia informações que podem ser armazenadas em variáveis 
*/

let nome = prompt('Qual o seu nome?', 'Primeiro nome...');
alert(`Que bom que esteja conosco ${nome}!`);

/*
Entradada com confirm()
Uma caixa de mensagens com as opções CANCELAR e OK, que retornam o valor true ou false que pose ser armazenado numa variável para controle de fluxo.
*/

let continuar = confirm(`Deseja continuar o curso ${nome}?`);

if (continuar == true) {
    alert('Vamos prosseguir a aula!');
} else {
    alert('Tudo bem, você pode continuar depois');
    window.close();
}