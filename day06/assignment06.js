/*
Homework: Create a dynamically generated form

1. When user clicks the “add more” button, a new input should be appended BEFORE the form submit button
2. The input needs to only be a generic type=“text”
3. When “submit” button is pressed, each press outputs to the console an array of all input values*/


var submitBtn = document.getElementById('submit');
var form = document.getElementsByTagName('form')[0];

submitBtn.onclick = getVals;

function getVals(e){
    e.preventDefault();
    var valArr = [];
    for(var i = 0; i < form.elements.length; i++){
        valArr.push(form.elements[i].value);
    }
    valArr.pop();
    console.log(valArr);
}

function newEl() {
    var inputEl = document.createElement('input');
    inputEl.id = 'newId';
    inputEl.name = 'new';
    inputEl.type = 'text';
    inputEl.placeholder = 'Added Element';
    form.insertBefore(inputEl,form.submit);
}
btn.onclick = newEl;
