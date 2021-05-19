let num1 = -30
let num2 = 60
let num3 = 9

//programa ve qual dos 2 valores é maior.
if (num1 > num2){
  console.log(num1)
} else {
  console.log(num2)
}



//programa ve qual dos 3 valores é maior.
if (num1 > num2){
  console.log(num1)
} else if(num2 < num3) {
  console.log(num3)
} else{
  console.log(num2)   
}


//programa ve se o numero é positivo ou não
if (num1 > 0) {
  console.log ("Positive")
} else if (num1 < 0) {
  console.log("Negative")
} else {
  console.log("Zero")
}

//programa calcula ângulos internos para ver se é um triangulo.
let num1 = 30
let num2 = 60
let num3 = 90

if (num1 + num2 + num3 == 180) {
  console.log(true)
} else if(num1 + num2 + num3 != 180) {
  console.log(false)
} else if (num1 < 0 || num2 < 0 || num3 < 0) {
  console.log("Valor invalido!!")
}