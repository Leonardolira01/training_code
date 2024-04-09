// 5 Crie uma função que calcule o fatorial de um número.

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
  return 1;    
  } else {
    return numero * calcularFatorial(numero - 1);
  }  
}
console.log(calcularFatorial(8))