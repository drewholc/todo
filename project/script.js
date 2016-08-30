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
    var inputItem = document.createElement('li');
    inputItem.id = 'newId';
    inputItem.name = 'new';
    inputItem.type = 'input';
    inputItem.placeholder = 'New Item';
    form.appendChild(inputItem);
}
btn.onclick = newItem;
