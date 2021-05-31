function createDaysOfTheWeek() {
  let weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  let weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    let days = weekDays[index];
    let dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercicio 1
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    }
  }
}
createDaysOfTheMonth();

//Exercicio 2
function creatHolidaysButtons(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container')
  let button = document.createElement('button');
  let buttonNew = 'btn-holiday';

  button.innerHTML = buttonName;
  button.id = buttonNew;
  buttonContainer.appendChild(button);
};

creatHolidaysButtons('Feriados');

//Exercicio 3
function holidayChange() {
  let buttonHoliday = document.querySelector('#btn-holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = 'red';
  
  buttonHoliday.addEventListener('click', function() {
  let holidayClass = document.querySelectorAll('.holiday')
    for (let index = 0; index < holidayClass.length; index += 1) {
    if (holidayClass[index].style.backgroundColor === newColor) {
      holidayClass[index].style.backgroundColor = backgroundColor;
    } else {
      holidayClass[index].style.backgroundColor = newColor;
    }
  }
})
};


holidayChange();

//Exercicio 4
function creatFridayButton(friday) {
  let buttonContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  let buttonNewId = 'btn-friday';

  button.innerHTML = friday;
  button.id = buttonNewId;
  buttonContainer.appendChild(button);  
}

creatHolidaysButtons('Sexta-Feira');

//Exercicio 5
function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday-day');
  let newFridayText = 'Aleluia';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);

