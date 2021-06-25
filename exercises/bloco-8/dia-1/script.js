//Exercicio 1
// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: callback('Carla Paiva') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// const objetoNome = (string) => {
//   return {
//     Nome: string,
//     Email: `${string.replace(' ', '_')}@trybe.com`
//   }
// }

// console.log(newEmployees(objetoNome))



//Exercicio 2

const returnResult = (callback) => {
  //Aqui rola o sorteio
  if (4 == callback()) {
    return 'Parabéns você ganhou'
  }
  return 'Tente novamente'
}

const sorteio = () => {
  //Isso retorna um numero inteiro entre 1(incluindo) e 6(excluindo)
  return Math.floor(Math.random() * (6 - 1) + 1);
}

console.log(returnResult(sorteio))