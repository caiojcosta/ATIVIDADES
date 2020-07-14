/* 4. Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada
entre
estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
procedimento para uma turma composta por cinco alunos, usando o comando For.
Exemplo de tela de saída:
Entre com o nome do aluno: João da Silva
Entre com o grau A: 5.0
Entre com o grau B: 6.0
O aluno João da Silva tem uma média:5.7 */

var user = require("readline-sync");

for (cont = 0; cont < 5; cont++) {

    var nome = user.question("Digite o nome do aluno: ");
    var notaA = user.questionFloat("Qual foi a nota nota do aluno: ");
    var notaB = user.questionFloat("Qual foi a nota nota do aluno: ");
    var resultado = notaA * 0.3 + notaB * 0.7;
    console.log("O aluno " + nome + " ficou com a média: " + resultado.toFixed(2) + ".");
}
