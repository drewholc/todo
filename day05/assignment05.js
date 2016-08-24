
function goButtonClick(event) {
	domInput1("Hello JavaScript!");
	alert( domInput1() );
	domBox( domInput2() );
}

function domInput1(newval) {
	var input1Reference = document.getElementById("input1");
	if(newval !== undefined) {
		input1Reference.value = newval;
	}
	return input1Reference.value;
}

function domInput2(newval) {
	var input2Reference = document.getElementById("input2");
	if(newval !== undefined) {
		input2Reference.value = newval;
	}
	return input2Reference.value;
}

function domBox(newval) {
	var textBox = document.getElementById("box");
	if(newval !== undefined) {
		textBox.innerHTML = newval;
	}
}

(function() {
	document.getElementById("btn").onclick = goButtonClick;
}());

/*
create js object for input 1, input2, btn and div
after user inputs values for input 1 & 2
user clicks go
input1 value replaced with text "Hello JavaScript!"
alert new value of input1
replace div text with value of input2
*/
