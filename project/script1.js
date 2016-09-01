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
				var label = document.createElement('label'); //creating label element to add
				var input = document.createElement('input'); //creating input element to add
				input.type = 'checkbox';	//type of input is now checkbox
        li.innerHTML = text;    //inserting text into newly created <li> element
        // li.onclick = function() {
        // this.parentNode.removeChild(this);};
    if (ul.childElementCount === 0) {  //using if/else statement to add items to top of list
        ul.appendChild(li);       // will add if count of ul children is 0 otherwise add before first item
    }
    else {
        ul.insertBefore(li, ul.firstChild);
				document.getElementById("addForm").reset();
    }
}


var editing  = false;

if (document.getElementById && document.createElement) {
	var butt = document.createElement('BUTTON');
	var buttext = document.createTextNode('Ready!');
	butt.appendChild(buttext);
	butt.onclick = saveEdit;
}

function catchIt(e) {
	if (editing) return;
	if (!document.getElementById || !document.createElement) return;
	if (!e) var obj = window.event.srcElement;
	else var obj = e.target;
	while (obj.nodeType != 1) {
		obj = obj.parentNode;
	}
	if (obj.tagName == 'TEXTAREA' || obj.tagName == 'A') return;
	while (obj.nodeName != 'LI' && obj.nodeName != 'HTML') {
		obj = obj.parentNode;
	}
	if (obj.nodeName == 'HTML') return;
	var x = obj.innerHTML;
	var y = document.createElement('TEXTAREA');
	var z = obj.parentNode;
	z.insertBefore(y,obj);
	z.insertBefore(butt,obj);
	z.removeChild(obj);
	y.value = x;
	y.focus();
	editing = true;
}

function saveEdit() {
	var area = document.getElementsByTagName('TEXTAREA')[0];
	var y = document.createElement('li');
	var z = area.parentNode;
	y.innerHTML = area.value;
	z.insertBefore(y,area);
	z.removeChild(area);
	z.removeChild(document.getElementsByTagName('button')[0]);
	editing = false;
}

document.ondblclick = catchIt;
