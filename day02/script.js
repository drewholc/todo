// var firstName = prompt('What is your first name?');
// var lastName = prompt ('What is your last name?');
//
// console.log(firstName);
// alert(lastName);
//
// var answer = confirm('Is your full name ' + firstName + ' ' + lastName + '?');
// alert(answer);

// var constant = 30;
// var response = prompt('choose a number');
// response = parseInt(response);
// if ( isNaN(response) ) {
//   console.log('not a number');
// } else {alert('your number is' + response);}

// response = parseInt(response); //turns a string number into integer

// console.log( isNaN('5m') );
// console.log(constant === response);

// every response from a prompt is a string

var userAge = prompt('How old are you?');
// var userGender = prompt('Male or Female?');
//
// userAge = parseInt(userAge);
// if (userAge >= 21 && userGender == 'male') {
//   alert('You are male and old enough to drink!');
// }else if (userAge >= 21 && userGender == 'female'){
//   alert('You are female and old enough to drink!');
// }else {
//   alert('You are not yet 21!');
// }

(userAge < 21)?
  alert('under 21'):
  alert('over 21');
