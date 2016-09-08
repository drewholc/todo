var button = document.getElementById("submitButton")[0];
var taskInput = document.getElementById("new-task");
var list = document.getElementById("ul");


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
        var li = document.createElement("li"),  //creating li element to add
            checkbox = document.createElement('input'),
            label = document.createElement('label'),
            editInput = document.createElement('input'),
            editButton = document.createElement('button');
            deleteButton = document.createElement('button');

        checkBox.type = "checkbox";
        editInput.type = "text";
        editButton.innerText = "Edit";
        editButton.className = "edit";
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete";
        label.innerText = text;

        ul.appendChild(li);
        li.appendChild(checkBox);
        li.appendChild(label);
        li.appendChild(editInput);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
      }
    }


      //li.onclick = function() { //REMOVE ON CLICK
      //this.parentNode.removeChild(this);};//REMOVE ON CLICK
