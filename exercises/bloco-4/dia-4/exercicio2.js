function verificaPalindromo(palavra) {
    let palindromo = false;
    for(let index = 0; index < palavra.length; index += 1) {
        let palavra1 = palavra[index];
        
        for (let index2 = palavra.length; index2 >= 0; index2 -= 1) {
            let palavra2 = palavra[index2];
        }
    }
    if (palavra1 === palavra2) {
        palindromo = true;
    } else {
        palindromo = false;
    }
    return palindromo;
}
let verificado = verificaPalindromo('arara');

console.log(verificado)