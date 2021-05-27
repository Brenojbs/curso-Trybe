//Exercício 6

let peça = 'torrE'

//Me inspirei para fazer essa conversão de up case para lower case nesta página https://www.w3schools.com/jsref/jsref_tolowercase.asp

switch(peça.toLowerCase()){
    case 'rei':
        console.log('Somente anda uma casa por lance em todas as direções. Não pode situar- se em casa sob domínio de peça adversária');
        break
    case 'dama':
        console.log('A dama pode movimentar-se como a torre e como o bispo, ou seja, anda tanto em paralelas (linhas ou colunas) quanto em diagonais, tantas casas quanto se desejar, desde que haja espaço no tabuleiro.');
        break
    case 'torre':
        console.log('O movimento executado pelas torres é sempre em paralelas (linhas ou colunas), quantas casas desejar desde que haja espaço livre.');
        break
    case 'bispo':
        console.log('Seu movimento é sempre em diagonal, obedecendo à cor de sua casa inicial, ou seja, o bispo da casa branca não pode ocupar uma casa preta e vice-versa.');
        break
    case 'cavalo':
        console.log('O cavalo anda em um formato que reproduz a letra L, ou seja, duas casas, na direção horizontal ou vertical, e mais uma, em ângulo reto à direção anterior');
        break
    case 'peão':
        console.log('uma casa desocupada à frente. Quando o peão está em sua casa inicial, pode mover-se uma ou duas casas adiante, somente no primeiro movimento de cada peão.');
        break        
    default:
        console.log("Peça não identificada!");
}