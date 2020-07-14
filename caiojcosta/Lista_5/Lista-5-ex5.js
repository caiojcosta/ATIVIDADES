/* 5. Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo usuário,
usando o comando For.. Perguntar ao usuário se ele deseja calcular o fatorial de
outro número e repetir a execução do programa tantas vezes quantas o usuário indicar.
Exemplo de tela de saída: */

var user = require("readline-sync");
var num = user.questionInt("Digite um numero para o cauculo do fatorial: ")

var resultado = 1

for(; num>1; num--){
    resultado = resultado * num
}

console.log(resultado)