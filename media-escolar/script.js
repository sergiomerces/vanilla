function exibirMedia() {
    let nome = document.getElementById('nome').value;
    let nota1 = Number(document.getElementById('nota1').value);
    let nota2 = Number(document.getElementById('nota2').value);
    let outMedia = document.getElementById('outMedia');
    let outSituacao = document.getElementById('outSituacao');

    let media = (nota1 + nota2) / 2;

    if(media >= 7.0) {
        outMedia.textContent = `Médias das notas: ${media.toFixed(1)}`;
        outSituacao.textContent = `Parabéns ${nome}! Você foi Aprovado(a)!`;
        outMedia.style.color = 'blue';
        outSituacao.style.color = 'blue';
    } else if(media >= 4.0) {
        outMedia.textContent = `Médias das notas: ${media.toFixed(1)}`;
        outSituacao.textContent = `Parabéns ${nome}! Você está de exame!`;
        outMedia.style.color = 'green';
        outSituacao.style.color = 'green';
    } else {
        outMedia.textContent = `Médias das notas: ${media.toFixed(1)}`;
        outSituacao.textContent = `Lamentamos ${nome}! Você foi Reprovado(a)!`;
        outMedia.style.color = 'red';
        outSituacao.style.color = 'red';
    }
}

const botao = document.getElementById('botao');
botao.onclick = exibirMedia;