/* 1. Faça um algoritmo que receba uma entrada do usuário e caso encontre a letra a
transforme ela em maiúscula
EX: abelha
O algoritmo imprime
AbelhA
Dicas para esta atividade.
Para selecionar 1 caracter da string utilizamos a função charAt :
var nome = “oi”
console.log(nome.charAt(0))
console.log(nome.charAt(1))
O algoritmo imprime:
> o
> i
O número que colocamos dentro de charAt é a posição do caractere que queremos da
string, porém o primeiro elemento é 0 e não 1.
Sendo assim uma string de 2 elementos possui o elemento 0 e 1.
Para cada charAt você deve concatenar isto numa string separada e exibir ela no final. */


var user = require("readline-sync");

var palavra = user.question("Insira aqui uma palavra: ");


var novapalavra = ""
for (var cont = 0; cont < palavra.length; cont++) {

    if (palavra.charAt(cont) == "a") {
        novapalavra = novapalavra + "A"
    } else {
        novapalavra = novapalavra + palavra.charAt(cont)
    }
}
console.log(novapalavra);