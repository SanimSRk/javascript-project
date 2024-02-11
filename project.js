const AllahuakberDisply = document.getElementById('AllahuakberDisply');
const AllahuakberIncriment = document.getElementById('AllahuakberIncriment');
const AllahuakberDecriment = document.getElementById('AllahuakberDecriment');
//this is frist section is done  every ting is ok
let sum1 = 0;
AllahuakberIncriment.addEventListener('click', function () {
  if (sum1 === 33) {
    return alert('every ting is done');
  }
  sum1++;
  AllahuakberDisply.innerText = sum1;
});
AllahuakberDecriment.addEventListener('click', function () {
  if (sum1 <= 0) {
    return alert('stope for the click');
  }
  sum1--;
  AllahuakberDisply.innerText = sum1;
});

const AlhamdulilahDisply = document.getElementById('AlhamdulilahDisply');
const AlhamdulilahIncriment = document.getElementById('AlhamdulilahIncriment');
const AlhamdulilahDecriment = document.getElementById('AlhamdulilahDecriment');

//this is second section is done  every ting is ok
let sum2 = 0;
AlhamdulilahIncriment.addEventListener('click', function () {
  if (sum2 === 33) {
    return alert('every ting is done');
  }
  sum2++;
  AlhamdulilahDisply.innerText = sum2;
});
AlhamdulilahDecriment.addEventListener('click', function () {
  if (sum2 <= 0) {
    return alert('stope for the click');
  }
  sum2--;
  AlhamdulilahDisply.innerText = sum2;
});

const SubhanAllhaDisply = document.getElementById('SubhanAllhaDisply');
const SubhanAllhaIncriment = document.getElementById('SubhanAllhaIncriment');
const SubhanAllhaDecriment = document.getElementById('SubhanAllhaDecriment');

let sum3 = 0;

//this is thrid section is done  every ting is ok
SubhanAllhaIncriment.addEventListener('click', function () {
  if (sum3 === 33) {
    return alert('every ting is done');
  }
  sum3++;
  SubhanAllhaDisply.innerText = sum3;
});
SubhanAllhaDecriment.addEventListener('click', function () {
  if (sum3 <= 0) {
    return alert('stope for the click');
  }
  sum3--;
  SubhanAllhaDisply.innerText = sum3;
});

//all vleue is reset clicke for this button

const resetAll = document.getElementById('resetAll');
resetAll.addEventListener('click', function () {
  AllahuakberDisply.innerText = 0;

  AlhamdulilahDisply.innerText = 0;

  SubhanAllhaDisply.innerText = 0;
});
