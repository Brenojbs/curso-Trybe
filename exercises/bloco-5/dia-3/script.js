function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function criar () {
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  dezDaysList.splice(0, 2)
  let ulID = document.querySelector('#days')
    for (let index = 0; index < dezDaysList.length; index += 1) {
      const datas = dezDaysList[index];
      let dataDia = document.createElement('li');
      dataDia.innerHTML = datas;
      if (dezDaysList[index] === 25) {
        dataDia.className= 'day holiday friday'
      } else if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
        dataDia.className= 'day holiday' 
      } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
        dataDia.className= 'day friday'
      } else {
        dataDia.className= 'day'
      }
    ulID.appendChild(dataDia);
  };
}

criar ()

function feriado(feriados) {
  let bnt = document.createElement('button')
  let container = document.querySelector('.buttons-container') 
  bnt.innerText = feriados
  bnt.id= 'btn-holiday'
  container.appendChild(bnt)
}

feriado('feriados')

document.querySelector('#btn-holiday').addEventListener("click", function() {
  for (let index of document.getElementsByClassName('holiday')) {
    index.style.backgroundColor = 'green';
    }
}, "click", function() {
  for (let index of document.getElementsByClassName('holiday')) {
    index.style.backgroundColor = 'rgb(238,238,238)';
    }
});
