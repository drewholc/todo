/* ======STRING OBJECT===========
var str = '     drew      ';
console.log(str.trim()); //a method is just a function inside a function
*/

/*============MATH OBJECT===============
var randNum = Math.floor( Math.random() * 10 ) + 1;
console.log(randNum);
*/

/*=========DATE OBJECT=======
locale = 'en-us';
var toDay = new Date();
console.log(toDay);
console.log( toDay.toLocaleString ( locale,{month:"long"} ) + ' ' + toDay.getDate() + ', ' + toDay.getFullYear() );
*/

/*=============FUNCTIONS==============*/
//functions can grab from outside but while outside you cant grab things from inside function


var locale = 'en-us';
var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var userColor = prompt('Choose a color');
var birthday = prompt('What is your full birthday?');


function newFunction(first, last, color, bday) {
  // var bday = new Date();
  // bday.setMonth(7);
  // bday.setDate(23);
  // bday.setFullYear(1989);
  var bdayArr = bday.split(' ');
  return first + ' ' + last + "'s favorite color is " + color + " and your birthday is " + bdayArr[0] + ' ' + bdayArr[1] + ', ' + bdayArr[2] + ".";
}

console.log(newFunction(firstName, lastName, userColor, birthday));
