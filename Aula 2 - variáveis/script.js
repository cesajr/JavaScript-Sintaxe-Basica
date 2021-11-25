// tipos primitivos

//boolean
var vOuF = false;
console.log(vOuF);
//metodo para saber o tipo da variável typeOf
//para saber o tipo de variável faça o seguinte passo abaixo
console.log(typeof(vOuF));

//variável do tipo number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//variável do tipo string/caractere
var nome = 'JavaScript';
console.log(typeof(nome));

//existem 3 modos de declarar variáveis no JavaScript
var - escopo global e local;
let - escopo local de bloco;
const - escopo local de bloco;

// como declarar
var variavel
console.log(variavel); //será printada como undefined pq não foi inserido nenhum valor na variável;

var variavel = 'JavaScript';
console.log(variavel); //será printado o valor inserido na variável;

var variavel = 'JavaScript';
variavel = 'Sintaxe Básica'
console.log(variavel); //será printado o novo valor inserido na variável;

let variavel2 ='JavaScript';
variavel2 = 'Code';
console.log(variavel2);

//const constante;
//console.log(constante); //retorna undefined no console do navegador;

const constante2 = 'JS';
console.log(constante2); //retorna o valor inserido na variavel no console do navegador;

const constante2 = 'JS';
constante2 ='JavaScript' //se fizer isso o console irá apresentar um erro, pois esse tipo de variável não pode ser reatribuida/ressignificada;
console.log(constante2); //retorna o valor inserido na variavel no console do navegador;

//escopo
var escopoGlobal ='global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
}
console.log(escopoLocalInterno); //dessa forma a variavel mesmo sendo declarada não será mostrada no console, pois ela está dentro de uma função diferente da variável VAR;

//para resolver isso faça:
var escopoGlobal ='global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//Para declarar as variaveis use sempre o metodo camelCase. Não atribua metodos nativos do JavaScript a variaveis, pois não irá funcionar.
//Não use espaços. Utilize camelCase ou underline ex(camelCase ou camel_case)

//O que é atribuição
//Em JavaScript o sinal de igualdade significa atribuição
var atribuicao = 'JS'; //neste caso o sinal de igualdade diz que o valor atribuido a variaval é igual a ela;
console.log(atribuicao);
//comparação
//Em JavaScript o sinal duplo de igualdade significa comparação
var comparacao = '0' == 0; //se os valores comparados forem iguais o console retornará verdadeiro se não for retornará falso;
console.log(comparacao);

//comparação identica
//Em JavaScript o sinal triplo de igualdade significa comparação identica, isto é se o valor e o tipo atribuidos a variável são identicos
var comparacaoIdentica = '0' === 0; //apesar de os valores serem iguais os tipos não são pois o primeiro é uma string e a segunda é um number e no console será retornado false;
console.log(comparacaoIdentica);

//operadores aritimeticos
//adicao
var adicao = 1 + 1;
console.log(adicao);
//subtracao
var subtracao = 2 - 1;
console.log(adicao);
//multiplicacao
var multiplicacao = 3 * 2;
console.log(multiplicacao);
//divisao real
var divisaoReal = 18567423 / 1245879;
console.log(divisaoReal);
//divisao inteira ou o resto da divisao
var divisaoInteira = 3455 % 5678;
console.log(divisaoInteira);
//potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

//Operadores relacionais consultam a relação entre os valores

var maiorQue = 5 > 2; //se o valor A for maior que o valor B o console retorna true se não retorna false;
console.log(maiorQue);

var menorQue = 5 < 11; //se o valor A for menor que o valor B o console retorna true se não retorna false;
console.log(menorQue);

var maiorOuIgual = 5 >= 2; //se o valor A for maior ou igual o valor B o console retorna true se não retorna false;
console.log(maiorOuIgual);

var menorOuIgual = 2 <= 2; //se o valor A for menor ou igual o valor B o console retorna true se não retorna false;
console.log(menorOuIgual);

//Operadores lógicos consultam valores lógicos

var e = true && false; //se os valores são diferentes vai retornar false
console.log(e);

var e = true && true; // se os valores forem iguais vai retornar true
console.log(e);

var ou = true || false; //o ou vai considerar o valor verdadeiro
console.log(ou);

var nao = !true; //tem que retornar no console o valor false
console.log(nao);
