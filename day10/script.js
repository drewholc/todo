var car = {
  make: 'Ford',
  model: 'Escape',
  year: 2006
};

// console.log(car.make); DOT NOTATION
// car.model = 'Focus';
// console.log(car.model);

// var person = new Object();
// person.name = 'Drew';
// person.age = 27;
// person.job = 'developer';
// person.sayName = function () {
//     alert(this.name);
// };
//
//
// var person2 = {//=============OBJECT LITERAL============
//   name: 'Drew',
//   age: 27,
//   job: 'developer',
//   sayName: function () {
//       alert(this.name);
//   }
// };
//
// person2.sayName();


//==================================FACTORY PATTERN=========
// function createPerson(name, age, job) {
//     var p = new Object();
//     p.name = name;
//     p.age = age;
//     p.job = job;
//     p.sayName = function(){
//       alert(this.name);
//     };
//     return p;
// }
// var person1 = createPerson('drew', 27, 'developer');
// var person2 = createPerson('matt', 26, 'developer');
//
// person1.sayName();
// person2.sayName();

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    alert(this.name);
  };
}
// var person1 = new Person('drew', 27, 'developer');
// var person2 = new Person('matt', 26, 'developer');
//
// console.log(person1.age);
// person2.sayName();

var loginNum = 0;

function Login(user) {
  this.user = user;
  this.build = build;
}

function build () {
    loginNum++;
    var login = document.getElementById('login');
    var h2 = document.createElement('h2'),
        form = document.createElement('form'),
        label = document.createElement('label'),
        input = document.createElement('input'),
        submit = document.createElement('input');

    h2.textContent = 'Welcome ' + this.user + ' to your login page';
    label.setAttribute('for', 'user'+loginNum);
    label.textContent = 'Username: ';
    input.type = 'text';
    input.id = 'user'+loginNum;
    input.placeholder = 'username';
    submit.type = 'submit';
    submit.value = 'submit';

    login.appendChild(h2);
    label.appendChild(input);
    form.appendChild(label);
    form.appendChild(submit);
    login.appendChild(form);

}

var login1 = new Login('drew');
var login2 = new Login('matt');

login2.build();
login1.build();
