//vetores ou arrays
/* Arrays são um tipo de lista, ou matriz de variaveis, onde cada variavel possui um índice. Os valores podem ser de vários tipos.*/

//como declarar um array
/*let array = ['string', 1, true]; //array pode guardar varios tipos de dados
console.log(array);*/

//array pode guardar inclusive outros arrays
//let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
//console.log(array);

//indice do array
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
//console.log(array); //mostra o tipo de dado que está no indice 3, por exemplo.

//Manipulando arrays
//forEach
//array.forEach(function(item, index){console.log(item, index)}); //imprime o array junto com o índice;

//push
//array.push('novo item'); //insere algum tipo de objeto ao array existente
//console.log(array);

//pop método que remove o ultimo item do array
//array.pop();
//console.log(array);

//shift remove o primeiro item do array
//array.shift();
//console.log(array);

//unshift adiciona item no início do array
//array.unshift('novo item no inicio');
//console.log(array);

//indexOf retorna o indice de um item dentro de um array
//console.log(array.indexOf('string'));

//splice remove ou substitui um item por um indice
//array.splice(0, 3);
//console.log(array);

//slice retorna parte de um array já existente
//let novoArray = array.slice(0, 3); //neste caso ele imprime apenas os 3 primeiros itens do array
//console.log(novoArray);

//objetos são propriedades e valores que devem ser declarados entre chaves {}
let object = {string:'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object); //para acessar um objeto basta digitar um ponto após o object console.log(object.number);

//desestruturação do objeto em JavaScript
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

//outra forma de fazer desestruturação que é apartir de {} no momento da declaração da variável
var {number, string, boolean} = object;
console.log(number, string, boolean);
