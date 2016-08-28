// var input1 = document.getElementById('input1');
// var inputs = document.getElementsByClassName('input');
// var inputsTag = document.getElementsByTagName('input');
// var btnL = document.querySelector('button[type="button"]');
// var btnEls = document.querySelectorAll('label input');
var btn = document.getElementById('btn');
//
//
// // console.log(input1);
// // console.log(inputs);
//
// var btn = document.getElementById('btn');
//
// function btnClick() {
//   for( var i = 0; i < inputs.length; i++) {
//     console.log(inputs[i].value);
//   }
// }
//
// btn.onClick = btnClick;

var submitBtn = document.getElementById( 'submit' );
var form = document.getElementsByTagName( 'form' )[0];

submitBtn.onclick = getVals;

function getVals(e){
  e.preventDefault();
  var valArr = [];
  for(var i = 0; i < form.elements.length; i++){
    valArr.push(form.elements[i].value);
    // console.log(form.elements);
  }
  valArr.pop();
  console.log(valArr);
}


var lis = document.getElementsByTagName('li');
for(var i = 0; i < lis.length; i++){
  lis[i].addEventListener('click', function(e){
    console.log(e);
    console.log(this.textContent);
  });
}

console.log(lis);


// function logName(name) {
//   console.log(name);
// }

// foo('drew'); //WONT RUN
//
// var foo = function(name) {
//   console.log(name);
// };
//
// foo('drew'); //WILL RUN
//
// var last = function (lName) { //========funciton expressions
//   console.log(lName);
// }('holcomb');

function addInput() {
  var inputEl = document.createElement('input');
  inputEl.id='newId';
  inputEl.name='newId';
  inputEl.placeholder='newId@email.com';
  inputEl.type='text';
  form.appendChild(inputEl);
  console.log(inputEl);
}

btn.onClick = addInput();
