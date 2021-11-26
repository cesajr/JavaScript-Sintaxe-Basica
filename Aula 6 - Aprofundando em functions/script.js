//Tipos de funções
//declarativas
function funcao(){
   console.log('Sou uma mensagem de uma funcao declarativa'); 
}
funcao();

//expressoes de funçoes. a nomeação das funções por expressão é opcional.
//com nomeacao
var funcao = function funcao(){
    console.log('Sou uma msg de funcao de expressao com nomeacao');
}
funcao();

//sem nomeacao
var funcao = function(){
    console.log('Sou uma msg de funcao de expressao sem nomeacao');
}
funcao();

//Arrow functions sao de expressao de sintaxe curta. sempre serao anonimas nao podendo ser nomeadas. ex. var funcao = () => {${instrucao};}
var funcao = () => {
    console.log('Sou uma arrow function');
}
funcao();