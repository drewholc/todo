window.onload=function() {
  var button = document.getElementById("submitButton");
  button.onclick = addItem;
  //button.onclick = addCheckbox;
  //button.onclick = addLabel;
  //button.onclick = addButton;
};

function itemAdded(e){
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)    {
        document.getElementById('submitButton').click();
        return false;
    }else  return true;
}



function addItem() {
        var textInput = document.getElementById("item");  //getting text input
        var text = textInput.value;   //getting value of text input element
        var ul = document.getElementById("ul");  //getting element <ul> to add element to
        var li = document.createElement("li");  //creating li element to add
        li.innerHTML = text;    //inserting text into newly created <li> element
      //li.onclick = function() { //REMOVE ON CLICK
      //this.parentNode.removeChild(this);};//REMOVE ON CLICK
    if (ul.childElementCount === 0) {  //using if/else statement to add items to top of list
        ul.appendChild(li);       // will add if count of ul children is 0 otherwise add before first item
    }
    else {
        ul.insertBefore(li, ul.firstChild);
				document.getElementById("addForm").reset();
    }
}

/*function addCheckbox() {
    var ul = document.getElementById("ul"); //getting element <ul> to add element to
    var checkbox = document.createElement("input"); //creating li element to add
    input.type = "checkbox"; //setting input type to checkbox
    input.innerHTML = toggle;    //inserting text into newly created <li> element
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "cb";
  if (ul.childElementCount === 0) {  //using if/else statement to add items to top of list
        ul.appendChild(checkbox);       // will add if count of ul children is 0 otherwise add before first item
    }
    else {
        ul.insertBefore(checkbox, li.firstChild);
				document.getElementById("addForm").reset();
    }
}*/

/*function addLabel() {
    var textInput = document.getElementById("item");  //getting text input
    var text = textInput.value;   //getting value of text input element
    var li = document.getElementById("li");  //getting element <li> to add element to
    var label = document.createElement('label')
    li.innerHTML = text;
    label.htmlFor = "cb";
  if (ul.childElementCount === 0) {  //using if/else statement to add items to top of list
        ul.appendChild(label);       // will add if count of ul children is 0 otherwise add before first item
    }
    else {
        ul.insertBefore(label, li.firstChild);
				document.getElementById("addForm").reset();
    }
}*/

/*function addButton() {
    var ul = document.getElementById("ul"); //getting element <ul> to add element to
    var buttonEl = document.createElement("button"); //creating li element to add
    button.innerHTML = 'destroy';
  if (ul.childElementCount === 0) {  //using if/else statement to add items to top of list
        ul.appendChild(buttonEl);       // will add if count of ul children is 0 otherwise add before first item
    }
    else {
        ul.insertAfter(li, ul.firstChild);
				document.getElementById("addForm").reset();
    }
}*/
