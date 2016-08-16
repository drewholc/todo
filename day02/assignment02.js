var userAns = prompt('What would you like to do?');
var newAns = userAns.trim();
if (newAns === "" || newAns === null) {
  alert('you didnt type anything!');
}else {
  alert( 'You would like to ' + newAns);
}
console.log(newAns);
