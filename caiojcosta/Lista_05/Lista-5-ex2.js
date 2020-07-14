/* Faça um programa que leia dois números, o primeiro é o valor inicial de um contador, e
o
segundo é o valor final do contador (verifique se o valor inicial fornecido é inferior ao
valor final). Usando o comando For, escreva na tela uma contagem que comece no
primeiro número lido, escreva os números seguintes colocando apenas um número em
cada nova linha da tela, até chegar ao valor final indicado.
Entre com o Valor Inicial: 11
Entre com o Valor Final: 13
Contagem:
11
12
13
Final da contagem...*/



var user = require("readline-sync");

var n1 = user.questionInt("Digite um numero: ");
var n2 = user.questionInt("Digite um numero: ");

if (n1 < n2) {
    for (cont = n1; cont <= n2; cont++) {

        if (cont == n1) {
            console.log("CONTAGEM:")
        }
        console.log(cont);
        if (cont == n2) {
            console.log("* FINAL DA CONTAGEM *");
        }
    }
}
