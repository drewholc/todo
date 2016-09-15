var button = document.getElementById("submitButton")[0];
var todoInput = document.getElementById("item");
var list = document.getElementById("list");


function createItem() {
        var ul = document.getElementById("ul");
        var textInput = document.getElementById("item");  //getting text input
        var deleteAll = document.getElementById("deleteAll");//getting delete all button
        var text = textInput.value;   //getting value of text input element
        var list = document.getElementById("list");  //getting element <ul> to add element to
        var li = document.createElement("li"),  //creating li element to add
            checkbox = document.createElement('input'),
            label = document.createElement('label'),
            editInput = document.createElement('input'),
            deleteButton = document.createElement('button');

        checkbox.type = "checkbox";
        label.className = "itemLabel";
        editInput.type = "text";
        deleteButton.innerText = "X";
        deleteButton.className = "destroy";
        label.innerText = text;

        list.appendChild(li);
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(editInput);
        li.appendChild(deleteButton);


      var reset = document.getElementById("addForm").reset();

        deleteButton.onclick = function() { //REMOVE ON CLICK
          li.parentNode.removeChild(li);//REMOVE ON CLICK
       };//REMOVE ON CLICK

//========================================REMOVE ALL ON CLICK=========================
    //    deleteAll.onclick = function() {//REMOVE ALL ON CLICK
    //        //alert('working on click');
    //       var values = [];
     //
    //       for (var i = label.length -1 ; i>= 0; i--)
    //         if (label[i].type === "checkbox" && label[i].checked)
    //           values.push(label[i].value);
    //           console.log(values);

    //     if(checkbox.checked === true){
    //       alert(label);
    //     //removeChild(li);
    //     //label.innerText = 'hello puppet';   //EDIT ON CLICK
    //   }
    // };//REMOVE ALL ON CLICK
//========================================REMOVE ALL ON CLICK=========================


       label.onclick = function () {    //EDIT ON CLICK
         console.log('test');
          var editText = prompt('Edit Input', label.innerHTML);    //EDIT ON CLICK
          label.innerText = editText;    //EDIT ON CLICK
       };    //EDIT ON CLICK
}


 // function setStorage(e){
 //   e.preventDefault();
 //
 //   localStorage.setItem(label.innerText);
 // }


function itemAdded(e){
     e = e || window.event;
     if (e.keyCode == 13)    {
          document.getElementById('submitButton').click();
          return false;
     }else  return true;
  }

submitButton.addEventListener("click", createItem);
