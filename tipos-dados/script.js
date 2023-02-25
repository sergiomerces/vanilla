/*
Tipos de Daos e Conversões
Em JavasScript as varáveis possuem tipagem dinâmica (fraca); ou seja o tipo de dado que a variável vai receber não é atribuído em sua declaração como na Linguagem C/C++, C# ou Java, a linguagem vai atribuir à variável o tipo de acordo com seu contexto, isso pode trazer alguns inconvenientes como demostrados abaixo:

String: formato de texto, inclui caracteres alfanuméricos e caracteres especiais, strings por regra vem entre aspas simples ou duplas

Number: formato numérico pode ser inteiro (int) ou decimal (float)

Boolean : formato tipo true ou false

Array: uma coleção de dados, geralmente do mesmo tipo, numa mesma variável, é declarado entre []; o array é aceessaod a partir do seu índice

Obejct: uma coleção de chaves e valores que representam a propriedades de uma entidade, declarado enre {}

Funções: são blocos de código que realizam uma tarefa específica e podem ser facilmente reutilizados em qualquer parte do programa.

Undefined: um tipo de variável que foi declara, mas não recebeu a atribuição de nenhum valor

Null: uma variável que intencionalmente o desenvolvedor informa que não há valor atribuído
*/

//Isto é uma string
let nome = 'Sérgio da Costa Mercês';
console.log(nome);

//Estes são numbers
let anoNascimento = 1979;
let peso = 92.1;
let altura = 1.7;
console.log(`\nAno nascimento ${anoNascimento}\nPeso ${peso}\nAltura ${altura}`);

//Isto é um boolean
let canhoto = true;
console.log(canhoto);
console.log('\n');

//Isto é um array
let alunos = ['José', 'Pietra', 'Pablo', 'Gabriela'];
console.log(alunos);
console.log('\n\n');

//Isto é um objeto
let funcionario = {
    nome: 'Sérgio',
    ultimoNome: 'Mercês',
    anoNascimento: 1979
};

console.log(funcionario);

console.log('\n');

function showMe(nome, sobrenome, idade, profissao, cidade) {
    return console.log('Meu nome é ' + nome + ' ' + sobrenome, ' tenho ' + idade + ' anos, sou ' + profissao + ' e moro na cidade de ' + cidade);
}

showMe('Sérgio', 'Mercês', 43, 'servidor público', 'Salto - SP');

//Isto é um undefined, a 
let item;
console.log(item);

//Isto é um null
let quantidade = null;

/*
Verificando o tipo de dado
Para verificar o tipo de dado usamos o comando type()
*/
console.log('\n');
console.log(nome);
console.log(typeof(nome));

console.log('\n');
console.log(anoNascimento);
console.log(typeof(anoNascimento));
console.log(peso)
console.log(typeof(peso));

console.log('\n');
console.log(canhoto);
console.log(typeof(canhoto));

console.log('\n');
console.log(alunos);
console.log(typeof(alunos));

console.log('\n');
console.log(funcionario);
console.log(typeof(funcionario));

console.log('\n');
console.log(item);
console.log(typeof(item));

console.log('\n');
console.log(quantidade);
console.log(typeof(quantidade));

/*
Trabalhando com strings e numbers
Para juntar strings diferentes numa mesma expressão usamos o operador + para a operação de concatenação

Porem quando vamos concatenar uma string e um number podemos não ter o resultado esperado

Todo inserido pelo usuário pelo prompt() ou por meio de campos de formulário são do tipo string
*/


//Conversão de String para Number
//string para inteiro
numInteiro = parseInt(num1);

numDecimal = parseFloat(num2);

//De forma geral podemos usar apenas o método Number pra converter de string para número e a linguage converte de acordo com o contexto
Number(num1);
Number(num2);

//Converter de Number para String
