/* 3. (OBRIGATÓRIO) Escreva um programa javascript para escrever o seguinte padrão na
tela, com N linhas:
*
* *
* * *
* * * *
* * * * *
Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5). */

var user = require("readline-sync")

var num = user.questionInt("Insira um numero: ")
var cont = 1
var str = "*"

while(cont <= num){
    console.log(str.repeat(cont));
    cont++
}