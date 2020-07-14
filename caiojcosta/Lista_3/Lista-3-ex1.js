/* Faça um programa que recebe um número de entrada e repita a mensagem “BIP BIP”
de acordo com o número inserido.
EX: usuário inseriu 3
O programa imprime:
BIP BIP
BIP BIP
BIP BIP */


var user = require("readline-sync");

var num = user.question("Digite um número: ")
var cont = 0

while (num > cont) {
    console.log("BIP BIP")
    cont++
}