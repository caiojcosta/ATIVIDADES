/*Faça um programa que calcule a potência (potenciação) de um número.  
Para isso ele deve receber dois números de entrada: 
o primeiro número é a base da potência, o segundo número será a potência. 
 
EX: usuário inseriu 2 para base e 4 para potência. 
O programa imprime :  16 Lembrando: 2​4 ​= 2*2*2*2*/

var user = require("readline-sync");

var base = user.questionInt("Digite o numeor da base da potencia: ");
var potencia = user.questionInt("Digite um númeoro para a potencia: ");
var cont = 0;

var resultado = 0;

while (cont == resultado) {
    resultado = base * potencia
    cont++
}

console.log(resultado)