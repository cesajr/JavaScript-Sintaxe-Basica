//funções são blocos de comandos e instruções para a execução de determinadas tarefas
//Ex. function nomeDaFuncao(){ ${instrucao};} nomeDaFuncao();

function funcao(){
    console.log("Tudo certo jovem! Essa mensagem veio de uma função.");
}

funcao();

//funções com parametros podem receber em sua declaracao, parametros, que servem como variaveis onde sua atribuicao pode ser feita durante a chamada da funcao.
//Ex. function nomeDaFuncao(parametro){${instrucao}} nomeDaFuncao(valordoParametro):

function mensagem(primeiro, segundo){
    console.log(primeiro, segundo);
}

mensagem('Tudo certo', 'jovem');