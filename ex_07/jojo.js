// 6 Crie uma função que receba uma idade e verifique se a pessoa é maior de idade.

function verificarIdade(idade){
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(verificarIdade("20"))