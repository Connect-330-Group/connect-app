// var loggedIn = false;
var loginName;
var loginEmail;
var loginGender;
var loginAge;
function submitLogin () {
  loginName = document.getElementById('inputName').value;
  loginAge = document.getElementById('inputAge').value;
  loginEmail = document.getElementById('inputEmail').value;
  if(document.getElementById('male').checked) 
  {
    loginGender = 'Male'
  }
  else if(document.getElementById('female').checked) 
  {
    loginGender = 'Female'
  }
  else if(document.getElementById('other').checked)
  {
    loginGender = 'Other'
  }
  else
  {
    loginGender = 'Not Specified'
  }
  document.getElementById('welcomeBanner').innerHTML = 'Welcome, ' + loginName + '!';
  document.getElementById('viewProfile').innerHTML = 'View Profile';

  // Check browser support
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("myName", loginName);
    localStorage.setItem("myEmail", loginEmail);
    localStorage.setItem("myGender", loginGender);
    localStorage.setItem("myAge", loginAge);
  }
}


// Update banner based on web storage:
if (typeof(Storage) !== "undefined") {
  // Retrieve from local storage
  var temp = localStorage.getItem("myName");
  console.log('temp', temp, typeof(temp));
  if(temp != null) {
    document.getElementById('welcomeBanner').innerHTML = 'Welcome, ' + temp + '!';
    document.getElementById('viewProfile').innerHTML = 'View Profile';
  }
}
