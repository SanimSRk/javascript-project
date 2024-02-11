// const updted = document.getElementById('updted');
// updted.addEventListener('click', function () {
//   const input = document.getElementById('inp');
//   const inpt = input.value;
//   const welcome = document.getElementById('welcome');
//   welcome.innerText = inpt;
//   input.value = '';
// });

//task 2

// const Submit = document.getElementById('Submit');
// Submit.addEventListener('click', function () {
//   const parent = document.getElementById('parent');
//   const p = document.createElement('p');
//   parent.appendChild(p);
//   const text = document.getElementById('new_text');
//   const new_text = text.value;
//   p.innerText = new_text;

//   text.value = '';
// });

// const inpt = document.getElementById('inpt');
// inpt.addEventListener('keyup', function (event) {
//   const text = event.target.value;
//   const delet = document.getElementById('deletd');

//   if (text === 'delet') {
//     delet.removeAttribute('disabled');
//   } else {
//     delet.setAttribute('disabled', true);
//   }
// });
// const deletdd = document.getElementById('deletd');
// deletdd.addEventListener('click', function () {
//   const bgd = document.getElementById('bg');
//   bgd.style.display = 'none';
//   const inpt = document.getElementById('inpt');
//   inpt.value = '';
// });

// const cliced1 = document.getElementById('clikNumber1');
// cliced1.addEventListener('click', function (event) {
//   console.log('clicked');
// });
// const cliced2 = document.getElementById('click2');
// cliced1.addEventListener('click', function (event) {
//   event.stopPropagation;
//   console.log('clicked now 2');
// });
// const cliced = document.getElementById('cliced');
// cliced1.addEventListener('click', function (event) {
//   event.stopPropagation;
//   console.log('item 2 cliced');
// });

// const items = document.getElementsByClassName("item")
// for (const num of items) {
//   num.addEventListener("click", function (event) {
//     num.parentNode.removeChild(num)
//   })
// }

// const list_contner = document.getElementById("list-contner")
// list_contner.addEventListener("click", function (event) {
//   event.target.parentNode.removeChild(event.target)
// })

// const addItem = document.getElementById("addItem")
// addItem.addEventListener("click", function () {
//   const list = document.getElementById("list-contner")
//   const li = document.createElement("li")
//   li.innerText = "add new items in the list"
//   li.classList.add("item")
//   list.appendChild(li)

// })
