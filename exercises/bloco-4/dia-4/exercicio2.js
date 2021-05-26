function verificaPalindromo(palavra) {
    let palindromo = false; 
    let palavra2 = '';   
    for (let index2 = palavra.length -1; index2 >= 0; index2 -= 1) {
        let palavra1 = palavra[index2];
         palavra2.push(palavra1);
         console.log(palavra2);
        }
    if (palavra === palavra2) {
        palindromo = true;
    } else {
        palindromo = false;
    }
    return palindromo;
}
let verificado = verificaPalindromo('arara');

console.log(verificado)