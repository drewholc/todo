var btn = document.getElementById('button');

// ADD A REMOVE EVENT LISTENER
// btn.addEventListener('click', once);
//
// function once() {
//   console.log('done');
//   btn.removeEventListener('click', once);
// }

// btn.addEventListener('mousedown', function(e){
//   console.log(e);
//   if  (e.which == 1 ){
//     console.log('left-click');
//   }else if ( e.which == 2 ){
//   console.log('middle-click');
// }else if ( e.which == 3 ){
//   console.log('right-click');
// }});


// PREVENTING DEFAULT BEHAVIOR
// a.addEventListener('click', function(e){
//   console.log(e);
//   e.preventDefault();
//   console.log('google blocked!');
// });

// addEventListener('keydown', function(e){
//   console.log(e);
//   if (e.keyCode == 86){
//     document.body.style.backgroundColor='violet';
//   }
// });
//
// addEventListener('keyup', function(e){
//   if (e.keyCode == 86){
//     document.body.style.backgroundColor='';
//   }
// });

// addEventListener('keypress', function(e){
//   if(e.charCode == 118){
//     document.body.style.backgroundColor='green';
//   }
// });

// console.log('R'.charCodeAt(0));


// LISTEN FOR MOUSE MOVE
// addEventListener('mousemove', function (e) {
//   // console.log(e.screenY + 'px');
// });

// RENDER DOT ON CLICK LOCATION
// addEventListener('click', function (e) {
//   var dot = document.createElement('div');
//   dot.className = 'dot';
//   dot.style.left = (e.pageX) + 'px';
//   dot.style.top = (e.pageY) + 'px';
//   document.body.appendChild(dot);
// });



// ADD A CLASS
var header = document.querySelector('header');

addEventListener('scroll', function (e) {
  console.log(e);
  if (e.pageY >= 65) {
    header.classList.add('fixed');
    document.body.style.paddingTop = '65px';
  }else{
    header.classList.remove('fixed');
    document.body.style.paddingTop = '0px';

  }
});
