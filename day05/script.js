
// =============================ARRAYS==========================
/*var fruitColors = [];
var apple = ['apple', 'green'];
var kiwi = ['kiwi', 'brown'];
var grape = ['grape', 'purple'];

var fruits = ['apple', 'banana', 'cherry', 'strawberry', 'kiwi'];

fruitColors.push(apple);
fruitColors.push(kiwi);
fruitColors.push(grape);

var lastFruit = fruitColors.pop();    //REMOVE FROM END OF ARRAY
var firstFruit = fruitColors.shift(); //REMOVE FROM BEGINING OF ARRAY

// console.log(firstFruit);
// console.log( fruitColors );
// console.log( fruitColors[0][1] );
// console.log( fruitColors[1][1] );
// console.log( fruitColors[2][1] );

// var selectedFruit = fruits.slice(1, 4); CREATES NEW ARRAY W/ SELECTED INDEXIS //(1, 4) 1 is included 4 is NOT
// console.log(fruits);
// console.log(selectedFruit);

fruits.splice(1, 2, 'grape');

console.log(fruits);
*/


var fruits = [];

function getFruit() {
  var fruit = prompt('pick a fruit');
  fruits.push(fruit);
  moreFruit();
}

function moreFruit() {
  var addMore = confirm('add more?');
  if ( addMore ) {
    getFruit();
  }else {
    console.log(fruits);
    removeFruit();
  }
}

function removeFruit() {
  var remove = prompt ('pick an index number');
  fruits.splice(remove, 1);
  fruits.sort();
  outputFruits(fruits);
}

function outputFruits(array) {
  // FOR LOOP
  // for (var i = 0, i = array.length; i < len; i++){
  //   console.log(array[i]);
  // }

// WHILE LOOP
//   var i = 0;
//   while (i < array.length) {
//     console.log(array[i]);
//     i++;
//   }
// }

  // DO WHILE LOOP
  //   var i = 0;
  //   do {
  //     console.log(array[i]);
  //     i++;
  //   } while ( i < array.length);
  // }
// getFruit();
}
// var i = 0;
//  while  (i < 10) {
//    i++;
//    if (i === 5 || i === 7) {
//      continue;
//    } else console.log(i);
//  }

for  ( var i = 1; i <= 10; i++)
if (i === 6) {
  break;
}else console.log(i);
