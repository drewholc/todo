var firstName = prompt('what is your first name?');

function capitalizeFirstLetter(first) {
  return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
}
firstName = capitalizeFirstLetter(firstName);
console.log(firstName);
