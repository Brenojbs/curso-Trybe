let divP = document.getElementsByTagName('p')[0]

divP.innerText = 'Com minha casa, organizada eu vou acordando cedo. Volto do meu treino matinal e me sinto confortável a o preparar as minhas refeições diárias da dieta restritiva.'
divP.style.height= '50px'

let colorDiv = document.getElementsByClassName('main-content')[0]

colorDiv.style.backgroundColor= 'green'



let colorDiv2 = document.getElementsByClassName('center-content')[0]

colorDiv2.style.backgroundColor= 'white'


let h1Text = document.getElementsByTagName('h1')[0]

h1Text.innerText= 'Exercício 5.1 - JavaScript'

// imprime todos os conteudos das tags p no console 
divP.style.textTransform = 'capitalize'

let todas = document.getElementsByTagName('p')

console.log(todas)