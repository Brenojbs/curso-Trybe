module.exports = {
  sum,
  myRemove,
};
function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
  }

  return a + b;
}


function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}


// const obj1 = {
//   title: 'My Title',
//   description: 'My Description',
// };

// const obj2 = {
//   description: 'My Description',
//   title: 'My Title',
// };

// const obj3 = {
//   title: 'My Different Title',
//   description: 'My Description',
// };

// // implemente seus testes aqui

// assert.deepStrictEqual(obj1, obj2)
// assert.notDeepStrictEqual(obj1, obj3)

// function addOne(array) { 
//   let element = []
//   for (let index = 0; index < array.length; index += 1) {
//     let novo = array[index] + 1  
//     element.push(novo);
//   }
//   return element
// }

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);