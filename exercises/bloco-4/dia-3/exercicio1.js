// Só consegui fazer com o gabarito. Mas entendi que eu precisava incrementar espaços a let simbolo  ou incrementar '*', logo quando terminar o loop do 2° for tinha que zerar a let simbolo e decrementar a let asterisco que iniciou com o valor da let formato!!!!
let formato = 10;
let simbolo = '';
let asterisco = formato;

for (let index = 0; index < formato; index += 1) {
    for (let index2 = 0; index2 < formato; index2 += 1) {
        if (index2 < asterisco){
            simbolo += ' '
        } else {
            simbolo += '*'
        }
    }
    console.log(simbolo)
    simbolo = ''
    asterisco -= 1

}





