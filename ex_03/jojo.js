// 2 Crie uma função que receba um número e retorne se ele é par ou ímpar.
function identificarParOuImpar(numero){
  if (numero % 2 === 0) {
    return "Par"
  } else {
    return "Impar"
  }
}
console.log(identificarParOuImpar(3))
console.log(identificarParOuImpar(10))