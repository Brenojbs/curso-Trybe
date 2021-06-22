ESTA UMA BAGUNÇA! MAS APRENDI O QUE ERA MANUZEAR OBJETO!!!!

{
// Criar uma function para mostrar
// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
//   };
  
//   const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
//   };

  // const listSkills = (student) => {
  //   const bla = Object.keys(student);
  //   for(index in bla){
  //     console.log(`${bla[index]}, Nível: ${student[bla[index]]}`);
  //   }
  // };
  
  // console.log('Estudante 1');
  // listSkills(student1);
  
  // console.log('Estudante 2');
  // listSkills(student2);

// Exercício numero 1

// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       margherita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 50,
//   },
// };

// const customerInfo = (order) => {
//   console.log(`Olá ${order.order.delivery['deliveryPerson']}, 
//   entrega para: ${order.name}, 
//   Telefone: ${order.phoneNumber}, 
//   ${order.address.street}, 
//   N°: ${order.address.number}, 
//   AP: ${order.address.apartment}.`)
// }

// customerInfo(order);

// const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
//   console.log(`Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e ${order.order.drinks.coke.type} é R$ ${order.payment['total']},00.`)
// }

// orderModifier(order);

//Fim exercício 1
}

//Exercicio 2

{// let name = 'turno'
// let value = 'Manhã'
// let fim = (lesson2, name, value) => {lesson2[name] = value 
// return lesson2}
// console.log(`O objeto ficou assim: `, fim (lesson2, name, value))}

// let list = (objeto) => {let lista = Object.keys(objeto)
//   return lista}
// console.log(`A lista ficou assim: ${list (lesson2)}`)

// Function para adicionar key:value a um objeto.

// let objeto = (a, name, valor) => {
//     a[name] = valor;
//     return a
// }

// let casa = {
//     lote: 4,
// }

// console.log('O objeto retornado é: ', objeto(casa, 'quadra', 19))

// let list = (objeto) => {let lista = Object.keys(objeto)
//     return lista.length}
//   console.log(`A lista ficou assim: ${list (lesson2)}`)



const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


let allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons)


//Fim exercício 2
// let list = (objeto) => {let lista = Object.values(objeto)
//   return lista}
// console.log(`A lista ficou assim: ${list (lesson2)}`)

}