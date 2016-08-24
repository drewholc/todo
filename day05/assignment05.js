var btn = document.getElementById('btn');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var box = document.getElementById('box');

function btnClick() {
  alert(input1);
  input1 = 'Hello JavaScript!';
  box = input2;

}

btn.onclick = btnClick;









/*
create js object for input 1, input2, btn and div
after user inputs values for input 1 & 2
user clicks go
input1 value replaced with text "Hello JavaScript!"
alert new value of input1
replace div text with value of input2
*/
