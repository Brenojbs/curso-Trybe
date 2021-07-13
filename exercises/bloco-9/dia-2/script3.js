const newArray = () => {
  const arrayNumber = []
  for (let index = 0; index < 10; index++) {
    arrayNumber.push( Math.pow(Math.floor(Math.random() * (51 - 1) )+ 1, 2))        
  }
  return arrayNumber
}

const somaArray = (array) => {
  const arrayTot = 0;
  for (let index = 0; index < 10; index =+ 1) {
    arrayTot =+ array[index]
  }
  return arrayTot
}

const promise = new Promise((resolve, reject) => {
    const array2 = somaArray(newArray())
    if (array2 < 8000) {
      return resolve(array2)
    }
    return reject()
})
.then((array2) => console.log(`Promise resolvida ${array2}`))
.catch(() => console.log('Promise rejeitada'));