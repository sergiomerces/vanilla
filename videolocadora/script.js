function exibirTitulo() {
    const titulo = document.getElementById('titulo').value;
    document.getElementById('outTitulo').textContent = `${titulo}`;
}

function converterTempo() {
    const tempo = Number(document.getElementById('tempo').value);
    const hora = Math.floor(tempo / 60);
    const minuto = Math.floor(tempo % 60);
    document.getElementById('outDuracao').textContent = `Duração (hh:mm): ${hora}:${minuto}`;
}

const botao = document.getElementById('botao');
botao.addEventListener('click', exibirTitulo);
botao.addEventListener('click', converterTempo);

