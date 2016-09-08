window.onload=function() {
  var button = document.getElementById("submitButton");
  button.onclick = addItem;
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
				// var label = document.createElement('label'); //creating label element to add
				// var input = document.createElement('input'); //creating input element to add
				// var button = document.createElement('button'); //creating button element class destroy
				// input.type = 'checkbox';	//type of input is now checkbox
        li.innerHTML = text;    //inserting text into newly created <li> element
				// input.innerHTML = 'toggle';
				// label.innerHTML = text;
				// button.innerHTML = 'destroy';
      li.onclick = function() { //REMOVE ON CLICK
      this.parentNode.removeChild(this);};//REMOVE ON CLICK
    if (ul.childElementCount === 0) {  //using if/else statement to add items to top of list
        ul.appendChild(li);       // will add if count of ul children is 0 otherwise add before first item
    }
    else {
        ul.insertBefore(li, ul.firstChild);
				document.getElementById("addForm").reset();
    }
}
//
// function changeText(){
//   var change =
//   document.getElementById('#').innerHTML = "new text!";
//
// }
