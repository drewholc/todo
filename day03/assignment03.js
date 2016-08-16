var firstName = prompt('what is your first name?');

function capitalizeFirstLetter(first) {
  return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
}
var capped = capitalizeFirstLetter(firstName);
console.log(capped);
