/*const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

/*function random(event) {
  const btn = event.target;

  //console.log(btn);
  //btnLeft.classList = ['btn stop', 'btn start'];
  if (btn.innerHTML === 'START') {
    btn.innerHTML = 'STOP';
    btn.className = 'btn stop';
  } else {
    btn.innerHTML = 'START';
    btn.className = 'btn start';
    console.log(btn);
  }
}*/

btnLeft.addEventListener('click', random);

// Start/Stop Button
btnLeft.addEventListener("click", (event) => {
  if (btnLeft.innerHTML === "START") {
    btnLeft.textContent = "STOP";
    btnRight.textContent = "SPLIT";
    btnLeft.classList = "btn stop"
    btnRight.classList = "btn split"
    chronometer.startClick(printTime);
  } else {
    btnLeft.textContent = "START";
    btnRight.textContent = "RESET";
    btnLeft.classList = "btn start"
    btnRight.classList = "btn reset"
    chronometer.stopClick();
  }
});

// Reset/Split Button
/*btnRight.addEventListener("click", (event) => {
  if (btnRight.innerHTML === "RESET") {
    btnLeft.textContent = "START";
    btnLeft.classList = "btn start"
  }
});*/

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minDec.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  chronometer.splitClick();
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
//btnLeft.addEventListener('click', startClick);
/*btnLeft.addEventListener('click', startClick(event => {
  const btn = event.target;
  console.log(btn.startClick(splitClick()));
}));*/

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});