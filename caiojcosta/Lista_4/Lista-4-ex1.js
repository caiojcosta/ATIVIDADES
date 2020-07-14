/* ((OBRIGATÓRIO) Escreva um programa que pedirá para o usuário dois números entre 1
e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
input do usuário de string para inteiro. */


var user = require("readline-sync");

// numero 1 a 100

var num1 = user.questionInt("Escolha um numero entre 1 a 100: ");

var num2 = user.questionInt("Escolha um numero entre 1 a 100: ");

var maior = 0;
var menor = 0;
if (num1 > num2) {
    maior = num1;
    menor = num2;
} else {
    maior = num2;
    menor = num1;
}

while (menor <= maior) {

    if (menor % 7 == 0 && menor % 5 == 0) {
        console.log("Ping e Poing");        
    } else if (menor % 7 == 0) {
        console.log("Ping");       
    } else if (menor % 5 == 0) {
        console.log("Poing");        
    }
    else {
        console.log(menor); 
    }
    menor++
}