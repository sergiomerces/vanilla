# Lógica de Programação e Algoritmos com JavaScript

Autor: Edécio Fernando Iepsen

![logotipo Javascript](javascript_logo.png)

* Linguagem de programação criada pela **Netscape Communications Corporation junto com a Sun Microsystems** em 1995.
* 1996 a Netscape entrega paa a **ECMA - European Cmputer Manufacturers Association** para padronização.
* O Javascript é usado para definir o comportamento dos elemnetos de uma página HTML.
* Linguagem client-side
* Linguagem interpretada pelo browser
* Linguagem case sensitive
* Tipagem dinâmica e fraca
* Multiparadigma
* Multiplataforma

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
* boa prática uso do camel-case
* não podem conter espaços
* não podem começar com número
* não podem conter caracteres especiais
* não podem usar palavras reservadas

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
Para receber dados do usuário podemos receber pelo comando do método *prompt()* e armazenar numa variável para uso posterior.

```
 <script>
        let nome = prompt('Qual o seu nome?', 'Digite seu primeiro nome');
        alert('Bem-vindo ' + nome);
    </script>
```
## Tipos de dados
1. string
2. number
3. boolean
4. array
5. object
7. function
8. null
9. undefined
10. nan 