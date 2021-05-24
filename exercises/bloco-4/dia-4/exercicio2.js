function verificaPalindromo(palavra) {
    let palindromo = false;
    for(let index = 0; index < palavra.length; index += 1) {
        for (let index2 = palavra.length; index2 >= 0; index -= 1) {
            if (palavra[index] === palavra[index2]) {
                palindromo = true;
            } else {
                palindromo = false;
            }
        }
    }
    return palindromo
}
let verificado = verificaPalindromo('arara')
console.log(verificado)