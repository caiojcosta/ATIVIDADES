/* (OBRIGATÓRIO) ​Faça um algoritmo que receba uma palavra e imprima ela ao contrário. 
EX: usuário informou BANANA 
Algoritmo imprime: ANANAB*/

var user = require("readline-sync")


var palavra = user.question("Digite uma palavra: ")

var palavraReversa = palavra.length
var result = '';

while(palavraReversa > -1){
    result = `${result}${palavra.charAt(palavraReversa)}`
   // console.log(palavra.charAt(palavraReversa));
    palavraReversa--;
}

console.log(result)

// OR FOR

for (palavra; palavra > -1; contador--){
    result = `${result}${palavra.charAt(palavraReversa)}`
}

console.log(result)