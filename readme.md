# Lógica de Programação e Algoritmos com JavaScript

Autor: Edécio Fernando Iepsen

![logotipo Javascript](javascript_logo.png)

- Linguagem de programação criada pela **Netscape Communications Corporation junto com a Sun Microsystems** em 1995.
- 1996 a Netscape entrega paa a **ECMA - European Cmputer Manufacturers Association** para padronização.
- O Javascript é usado para definir o comportamento dos elemnetos de uma página HTML.
- Linguagem client-side
- Linguagem interpretada pelo browser
- Linguagem case sensitive
- Tipagem dinâmica e fraca
- Multiparadigma
- Multiplataforma

Funcionalidades:

1. interagir com usuário a partir de formulários
2. acessar e modificar conteúdos e características de uma página HTML
3. salvar infrmações no navegador do usuário
4. auxiliar na construção de layouts complexos

---

## Saída de dados com alert

```
<script>
        alert('Bem-vindo ao mundo Javascript!');
</script>
```

## Variáveis e constantes

São espaços alocados na memória d computador que permitem gusradar informações e trabalhar com elas. Os valores armazenados em uma variável podem ser alterados durante a execução do programa.
As variáveits declaradas em um programa devem conter um nome seguindo algumas regras:

- boa prática uso do camel-case
- não podem conter espaços
- não podem começar com número
- não podem conter caracteres especiais
- não podem usar palavras reservadas

### Atribuição de variável

```
var nome = 'Sérgio';
let e-mail = 'sergio.merces@gmail.com';
```

### Constantes

Como a variável é um espaço alocado na memória para armazenar um dado, contudo ao contrário da variável, ele não pode ser alterado durante a execução do programa. Por convenção os nomes de constantes são escritos em caixa alta.

### Atribuição de constante

```
const POLTRONAS = 100;
```

## Entrada de dados com prompt

Para receber dados do usuário podemos receber pelo comando do método _prompt()_ e armazenar numa variável para uso posterior.

```
 <script>
        let nome = prompt('Qual o seu nome?', 'Digite seu primeiro nome');
        alert('Bem-vindo ' + nome);
    </script>
```

## Tipos de dados

1. string - tipo texto aceita caracteres alfanuméricos e especiais, sempre declarado entre aspas ou crases
2. number - tipo numérico inteiro ou decimal
3. boolean - tipo lógico verdadeiro ou falso
4. array - lista de elementos com índice
5. object - coleção de dados que podem ser do mesmo ou tipos diferentes
6. function - bloco de código
7. null
8. undefined - variável que não recebeu atribuição de valor
9. nan

### Conversão de string para number

Todo dado de entrada de usuário capturado através do **prompt** vem como tipo **string** quando se trata de adição, porque a linguagem entende como uma operacção de concatenação. Para converter uma string em número podemos usar o método mais adequado:

```
const valorConta = Number(prompt('Informe o valor da conta:'));
const valorConta = parseInt(prompt('Informe o valor da conta:'));
const valorConta = parseFloat(prompt('Informe o valor da conta:'));
```

O **Number** faz a conversão dinâmica da string em tipo inteiro ou ponto flutuante de acordo com o contexto da operacão.
O **parseInt** converte a string para tipo **int** (inteiro) e **parseFloat** converte a string para tipo **float** (decimal).

### Fixar casa decimal

Para fixar o número de casas decimais de um número tipo **float** basta usar o método **toFixed()**.
Em Javascript o separador de casa decimal padrão é o **ponto (.)**.

```
alert(`valor do jantar: R$ ${valorConta.toFixed(2)}`);
```

### Template string

Para facilitar a concatenação de strings e variáveis na impressão de saída de tela, podemos dispensar o uso do operador de concatenação, desde que troquemos as aspas por crases:

```
//forma de concatenação comum
alert('Bem-vindo ' + nome);

//template string
alert(`Bem-vindo ${nome}`);
```

## Integração com HTML

As boas práticas prezam pela captura de dados do usuário através de elementos de formulários e a ação de processamento ocorre a partir de um evento como o clique de um botão. Outra boa prática é o descoplamento do código do frontend, onde cada arquivo tem seu papel, html a estrutura semântica, css a formatação de estilos e o javascript o comportamento de interação com o usuário.
A tag **script** pode ser carregada no **head** ou no **body** do HTML, contudo a recomendação para permitir que o usuário consiga ao menos carregar os elementos da página caso a execução do script tenha algum bug qe interrompa a continuidade, ela pode ser escrita antes do fechamento do **body**.

Arquivo HTML

```
<body>
    <h1>Programa Olá Você!</h1>
    <p>
        Nome
        <input type="text" name="nome" id="nome">
        <input type="button" value="Mostrar" id="mostrar">
    </p>
    <p id="resposta"></p>
    <script src="./js/ex2_1.js"></script>
</body>
```

Arquivo JS

```
function dizerOla(){
    const inpNome = document.getElementById('nome');
    document.getElementById('resposta').textContent = `Olá, ${inpNome.value}!`;
}

const btnMostrar = document.getElementById('mostrar');
//btnMostrar.onclick = dizerOla;
btnMostrar.addEventListener('click', dizerOla);
```

## Método getElementById()

Esse método permite referenciar qualquer elemento html que possua um id atribuído, assim podemos manipulá-lo, alterando seu estilo, capturando seu valor ou inserindo um valor.

```
let inpName = document.getElementById("nome");
let nome = inpNome.value;

let nome = document.getElementById("nome").value;
```

### Objeto, método e propriedade

- **Objeto** - representa uma instância de uma classe
- **Método** - representa uma instrução ou um conjunto de instruções que executam uma tarefa
- **Propriedade** - representa uma característica (atributo) de um objeto

### Porpriedades de escrita

- **textContent** insere texto no elemento

- **innerText** insere texto como textContent

- **innerHTML** insere texto renderizando o HTML

- **value** seleciona o conteúdo do elemento de formulários
