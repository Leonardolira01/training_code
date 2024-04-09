# Exercícios

1 - Crie uma função que receba dois números como argumentos e retorne a soma deles.
function somar(number5, number10){
  return (Number (number5) + (number10));
}
console.log(somar(5, 10));

ou

function somar(number1, number2){
  return number1 + number2
}
console.log(somar(5, 10))

------------------------------------

2 - Crie uma função que receba um número e retorne se ele é par ou ímpar.

functionfunction identificarParOuImpar(numero){
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

console.log(identificarParOuImpar(6))
console.log(identificarParOuImpar(9))

------------------------------------

3 - Crie uma função que conte o número de palavras em uma string.
function contadorDePalavras(frase) {
  let palavras = frase.split(" ");
  return palavras.length;
}
console.log(contadorDePalavras("oii"))

------------------------------------

4 - Crie uma função que receba um nome e retorne uma saudação.

function saudacao(nome) {
  return "Olá, " + nome + "!"
}

console.log(saudacao("Leonardo"))

------------------------------------

5 - Crie uma função que calcule o fatorial de um número.

Nesta função, verificamos se o número é 0 ou 1, caso em que o fatorial é sempre 1. Para outros números, calculamos o fatorial multiplicando o número pelo fatorial do número anterior (ou seja, numero - 1). Essa recursão continua até chegarmos a 0 ou 1.

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

// Exemplo de uso
console.log(calcularFatorial(5)); // Saída: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)

------------------------------------

6 - Crie uma função que receba uma idade e verifique se a pessoa é maior de idade.


------------------------------------
