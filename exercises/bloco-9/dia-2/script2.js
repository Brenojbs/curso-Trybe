// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const função = (ob) => {
    let div = document.querySelector('#jokeContainer')
    div.innerHTML = ob.joke
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(objeto => função(objeto));
};

window.onload = () => fetchJoke();