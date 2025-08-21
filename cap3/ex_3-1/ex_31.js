let media = 0;

function calcularMedia(){

    const nota1 = Number(document.getElementById('inNota1').value);
    const nota2 = Number(document.getElementById('inNota2').value);

    media = (nota1 + nota2) / 2;

    document.getElementById('outMedia').textContent = `Média das Notas: ${media}`;

}

function exibirSituacao(){

    const inNome = document.getElementById('inNome').value;
    let situacao = document.getElementById('outSituacao');

    if(media >= 7){
        situacao.textContent = `Parabéns ${inNome} Aprovado(a)`;
        situacao.style.color = 'green';
    } else {
        situacao.textContent = `${inNome} você foi Reprovado(a)`;
        situacao.style.color = 'red';
    }

}

function main(){
    calcularMedia();
    exibirSituacao();
}

const btExibir = document.getElementById('btExibir');
btExibir.onclick = main;
