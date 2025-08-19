function sayHello(){
            let name = prompt('Qual o seu nome?');

            while(name === ''){
                name = prompt('Por favor, se identifique!');
            }

            document.getElementById('outMessage').textContent = `Que bom receber você aqui, ${name}`;
        }

    const body = document.getElementById('corpo');
    body.onload = sayHello;