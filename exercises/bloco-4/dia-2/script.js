let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
	console.log(numbers[index]);
}

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
	
	soma = numbers[index] + soma;
}
let media = soma / numbers.length;

console.log(media);
if (media > 20) {
	console.log('Valor maior que 20.')
} else {
	console.log('Valor menor que 20')
}

let valorMaior = 0;

for (let index = 0; index < numbers.length; index += 1) {
	if(numbers[index] > valorMaior) {
		valorMaior = numbers[index]
	}
}

	console.log(valorMaior)

	
	let impares = 0;

	for (let index = 0; index < numbers.length; index += 1) {
		if(numbers[index] % 2 === 1) {
			impares = impares += 1
		} 

	}
	if (impares === 0){
		console.log('Nenhum valor impar encontrado.')
	} else {
		console.log(impares)
	}



	for (let index = 1; index < numbers.length; index += 1) {
		for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
		  if (numbers[index] < numbers[secondIndex]) {
			let position = numbers[index];
			numbers[index] = numbers[secondIndex];
			numbers[secondIndex] = position;
		  }
		}
	  }

console.log(numbers)


for (let index = 1; index < numbers.length; index += 1) {
	for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
	  if (numbers[index] > numbers[secondIndex]) {
		let position = numbers[index];
		numbers[index] = numbers[secondIndex];
		numbers[secondIndex] = position;
	  }
	}
  }

console.log(numbers)