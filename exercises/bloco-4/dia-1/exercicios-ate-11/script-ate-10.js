//Exercícios 7, 8, 9

let num1 = 40
let num2 = 23
let num3 = 2.5

//Pelo menos um Par
if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
    console.log(true)
} else {
    console.log(false)
}

//Pelo menos um Impar
if(num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1){
    console.log(true)
} else {
    console.log(false)
}

//Exercícios 10, 
let valorCompra = 200;
let valorVenda = 300;
let valorComImposto = 0;
let valorLucro = 0
let mil = 1000

if (valorCompra < 0 || valorVenda < 0) {
    console.log('Erro no valor inserido!')
} else {
    valorComImposto = valorCompra + valorCompra / 100 *20
    valorLucro = valorVenda - valorComImposto
    console.log(valorLucro * mil)
}
