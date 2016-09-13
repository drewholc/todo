var button = document.getElementById("submitButton")[0];
var todoInput = document.getElementById("item");
var list = document.getElementById("list");
var deleteAll = document.getElementById("deleteAll");


function createItem() {
        var ul = document.getElementById("ul");
        var textInput = document.getElementById("item");  //getting text input
        var text = textInput.value;   //getting value of text input element
        var list = document.getElementById("list");  //getting element <ul> to add element to
        var li = document.createElement("li"),  //creating li element to add
            checkbox = document.createElement('input'),
            label = document.createElement('label'),
            editInput = document.createElement('input'),
            editButton = document.createElement('button');
            deleteButton = document.createElement('button');

        checkbox.type = "checkbox";
        editInput.type = "text";
        editButton.innerText = "Edit";
        editButton.className = "edit";
        deleteButton.innerText = "Delete";
        deleteButton.className = "destroy";
        label.innerText = text;

        list.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(editInput);
        li.appendChild(deleteButton);
        li.appendChild(editButton);


     var reset = document.getElementById("addForm").reset();

      deleteButton.onclick = function() { //REMOVE ON CLICK
        li.parentNode.removeChild(li);//REMOVE ON CLICK
      };//REMOVE ON CLICK

      editButton.onclick = function () {
        // alert('working on click');
        label.innerText = textInput.value;
      //  label.innertext = changeText;
      };
}

function deleteAllItems() {
      var deleteAll = document.getElementById('deleteAll');
      checkbox = document.getElementsByTagName('input[type="checkbox"]');
      if (checkbox.checked)
      deleteAll.onclick = function () {
        li.parentNode.removeChild(li);
      };
}



function itemAdded(e){
     e = e || window.event;
     if (e.keyCode == 13)    {
          document.getElementById('submitButton').click();
          return false;
     }else  return true;
  }

submitButton.addEventListener("click", createItem);
deleteAll.addEventListener("click", deleteAllItems);
