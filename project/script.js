// var submitBtn = document.getElementById('submit');
var form = document.getElementsByClassName('form')[0];

// submitBtn.onclick = getVals;
//
// function getVals(e){
//     e.preventDefault();
//     var valArr = [];
//     for(var i = 0; i < form.elements.length; i++){
//         valArr.push(form.elements[i].value);
//     }
//     valArr.pop();
//     console.log(valArr);
// }

function newItem() {
    var newLI = document.createElement('li');
    var inputItem = document.createElement('input');
    inputItem.id = 'newId';
    inputItem.name = 'new';
    inputItem.type = 'input';
    inputItem.placeholder = 'Add Item';
    newLI.appendChild(inputItem);
    form.appendChild(newLI);
}
btn.onclick = newItem;

function deleteItem() {
 var deleteItem = document.removeElement('');
}
