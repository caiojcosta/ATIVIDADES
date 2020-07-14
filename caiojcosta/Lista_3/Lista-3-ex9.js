/*Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em
uma linha.
EX: usuário informou MAÇÃ
O algoritmo imprime:
M
A
Ç
Ã */

var user = require("readline-sync")

var palavra = user.question("insira uma oalavra: ")

var tamanhoPalavra = palavra.length

for(var i = 0; i < tamanhoPalavra; i = i +1){
    console.log(palavra.charAt(i));
}