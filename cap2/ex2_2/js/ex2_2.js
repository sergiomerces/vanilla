function converterDuracao(){
    const inTitulo = document.getElementById('inTitulo');
    const inDuracao = document.getElementById('inDuracao');
    const outTitulo = document.getElementById('outTitulo');
    const outResposta = document.getElementById('outResposta');


    const duracao = Number(inDuracao.value);
    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;

    outTitulo.textContent = inTitulo.value;
    outResposta.textContent = `${horas} hora(s) e ${minutos} minuto(s)`
}

const btnConverter = document.getElementById('btnConverter');
btnConverter.addEventListener('click', converterDuracao);

/*
1. criar todas referências das entradas e saídas no início
2. capturar e tratar dados com value e Number
3. processar operações
4. exibir saídas
5. o botão por ser o gatilho deve ter a captura e o listener com escopo global
*/