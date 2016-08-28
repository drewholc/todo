/* 1. When user clicks the “add more” button, a new input should be appended BEFORE the form submit button
2. The input needs to only be a generic type=“text”
3. When “submit” button is pressed, each press outputs to the console an array of all input values */


var btn = document.getElementById('add');
var submitBtn = document.getElementById( 'submit' );
var form = document.getElementsByTagName( 'form' )[0];




function addInput() {
  var inputEl = document.createElement('input');
  inputEl.id='newId';
  inputEl.name='newId';
  inputEl.placeholder='newId@email.com';
  inputEl.type='text';
  form.appendChild(inputEl);
  console.log(inputEl);
}

btn.onClick = addInput;
submitBtn.onclick = getVals;
