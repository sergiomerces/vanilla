// Calculando o Valor do Jantar

const valorJantar = Number(prompt('Digite o valor do Jantar:'));
const taxaServico = Number((valorJantar * 0.1));
const total = Number(taxaServico + valorJantar);

alert(`Valor do jantar R$: ${valorJantar.toFixed(2)}\n
    Taxa de serviço R$: ${taxaServico.toFixed(2)}\n
    Total R$: ${total.toFixed(2)}`);