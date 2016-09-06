var loginEl = document.getElementById('login');

function createLoginForm(repeat){
    var user = '';
    if (repeat){
      user = localStorage.getItem('username');
    }

    var loginForm =
    '<form>'+
      '<label for="username">Username:'+
        '<input type="text" id="user" value="'+ user +'">'+
      '</label>'+
      '<label for="pass">Password:'+
        '<input type="password" id="pass">'+
      '</label>'+
      '<input type="submit" value="submit">'+
    '</form>';
    loginEl.innerHTML = loginForm;

    var form = document.querySelector('form'),
        submitBtn = document.querySelector('input[type="submit"]');

    return;
}




function setStorage(e){
  e.preventDefault();

  localStorage.setItem('username', form.elements.user.value);
  localStorage.setItem('password', MD5(form.elements.pass.value));
}

function checkStorage(e){
  e.preventDefault();


  if(MD5(form.elements.pass.value) === localStorage.getItem('password')){
    alert('access granted');
  }else{
    alert('Please check your password');
  }
}

if(!localStorage.getItem('username') && !localStorage.getItem('password')){
  createLoginForm(false);
  alert('please enter a username and password to proceed');
  var form = document.querySelector('form');
  var submitBtn = document.querySelector('input[type="submit"]');
  submitBtn.addEventListener('click', setStorage);
  session.Storage.setItem('repeat', true);
} else if(localStorage.getItem('username') && localStorage.getItem('password')){
  createLoginForm(true);
  alert('Welcome back ' + localStorage.getItem('username') + '. Please enter your password to continue');
  var form = document.querySelector('form');
  var submitBtn = document.querySelector('input[type="submit"]');
  submitBtn.addEventListener('click', checkStorage);
}


  // storageArr = [];
  // for(var i = 0; i < form.elements.length -1; i++){
  //   storageArr.push(form.elements[i].value);
  // }
  // localStorage.setItem('creds', storageArr);





/*
unknownUser

1st -> username => storage
      password => encrypted => storage

      check username
      yes?=> get password => works? let them in
      no? => dont let them in

*/
