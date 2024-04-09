// 3 Crie uma função que conte o número de palavras em uma string.
function contadorDePalavras(frases) {
  let palavras = frases.split(" ");
  return palavras.length;  
}
console.log(contadorDePalavras("Eae mano, suave?"))
