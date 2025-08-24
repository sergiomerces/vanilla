const inNome = document.getElementById('inNome');
const radMasculino = document.getElementById('radMasculino');
const radFeminino = document.getElementById('radFeminino');
const inAltura = document.getElementById('inAltura');
const outResposta = document.getElementById('outResposta');

function calcularPeso(){

    let pesoIdeal = 0;
    let nome = inNome.value;
    let masculino = radMasculino.checked;
    let feminino = radFeminino.checked;
    let altura = Number(inAltura.value);

    if(nome === '' && masculino === false && feminino === false){
        
        alert('Por favor, informe o nome e o sexo para continuar...');
        inNome.focus();
        return;

    }

    if(altura == 0 || isNaN(altura)){

        alert('Por favor, informe a altura corretamente...');
        inAltura.focus();
        return;

    }

    if(masculino){

        pesoIdeal = 22 * (altura ** 2);
    } else {
        pesoIdeal = 21 * (altura ** 2);

    }

    outResposta.innerHTML = `${nome} seu peso ideal ${pesoIdeal.toFixed(3)} kg.`;

}

function limparCampos(){
    inNome.value = '';
    radMasculino.checked = false;
    radFeminino.checked = false;
    inAltura.value = '';
    outResposta.textContent = '';

    //limpou apenas a saída no html r não os dados do formulário
    // location.reload();

    inNome.focus();
}

btCalcular = document.getElementById('btCalcular');
btLimpar = document.getElementById('btLimpar');

btCalcular.addEventListener('click', calcularPeso);
btLimpar.addEventListener('click', limparCampos);