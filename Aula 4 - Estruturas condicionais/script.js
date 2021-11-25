// Estruturas condicionais são instruções para realizar determinadas tarefas a partir de uma condição, seja de decisão ou de repetição
// termo IF para criar uma condição
//var jogador1 = 0;
//var jogador2= 0;
//var placar;
//O if traz a condição para que seja realizada uma ação que é mostrar no console a mensagem
//if(jogador1>0)
//{
//   console.log('Jogador 1 marcou ponto!'); //ação a ser realizada caso a condição seja atendida
//} //se a condição não for atendida pode ser usado o else
//else //a instrução diz que a ação acima deve ser realizada, caso não seja possível deve ser realizada a segunda ação da condição senão(else)
//   {
 //       console.log('Ninguém marcou ponto'); //ação a ser realizada caso a 2° condição seja atendida
//   }
//caso haja mais de uma condição usa-se o else if
//var jogador1 = 0;
//var jogador2 = 0;

/*if(jogador1>0)
{
   console.log('Jogador 1 marcou ponto!');
} 
else if (jogador2>0)
   {
        console.log('Jogador 2 marcou ponto!');
   }
else
{
    console.log('Ninguém marcou ponto');
}*/

//podemos usar um if dentro de outro o que é chamado de aninhamento de if ou simplesmente ninho de if
/*var jogador1 = -1;
var jogador2 = 0;
if(jogador1 != -1){
    if(jogador1>0)
    {
    console.log('Jogador 1 marcou ponto!');
    } 
    else if (jogador2>0)
    {
            console.log('Jogador 2 marcou ponto!');
    }
    else
    {
        console.log('Ninguém marcou ponto');
    }
}*/

//if ternário
/*var jogador1 = 0;
var jogador2= 0;
var placar;
/*jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('jogadores inválidos');
//usando if
if(jogador1>0)
{
    console.log('Jogador 1 marcou ponto!');
} 
//usando else if
else if (jogador2>0)
{
    console.log('Jogador 2 marcou ponto!');
}
//usando else
else
{
    console.log('Ninguém marcou ponto');
}*/
/*jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('jogadores inválidos');
if(jogador1 > 0 && jogador2 == 0)
{
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
} 
//usando else if
else if (jogador2 > 0 && jogador1 == 0)
{
    console.log('Jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
}
//usando else
else
{
    console.log('Ninguém marcou ponto');
}
//switch/case funciona, também, como estrutura condicional
switch(placar){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
    default:
        console.log('ninguém ganhou');
}*/
//laços de repetição
// FOR funciona como uma repetição de instrução até que a condição seja falsa
//for([expressaoInicial]; [condicao]; [incremento]){
//    declaracao
//}
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}

//FOR/IN funciona como repetição a partir de uma propriedade ex.: for([indice] in [objeto ou array]){declaracao}
for(let i in array){
   console.log(i); //imprime os indices como string e não mais como numeros como no método anterior 
}

// for in pode ser usado com object
for(i in object){
    console.log(i); //retorna as propriedades do object
}

//FOR/OF funciona como uma repetição a partir de um valor: for([indice] of array){declaracao}
for(i of array){
    console.log(i); //retorna valores do array
}
//não se recomenda usar for/of com objetos mesmo sendo possível
for(i of object.propriedade1){
    console.log(i); //retorna valores do array
}

//WHILE executa uma instrução "enquanto" determinada condição for verdadeira e a verificação é feita antes da execução ex. var a = 0; while(a < 10){a++; console.log(a);}
//var a = 0;
//enquanto a for menor que 10 adiciona mais um a variável a e imprime no console
//while(a < 10){ //tem que colocar a condição senão o código fica em loop infinito
//    a++;
//    console.log(a);
//}

//DO/WHILE executa uma instrução "até que" determinada condição seja falsa. A verificação é feita após a execução
var a = 0;
do{
    a++;
    console.log(a);
}while(a<10)