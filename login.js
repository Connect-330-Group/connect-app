// var loggedIn = false;
var loginName;
function submitLogin () {
  loginName = document.getElementById('inputName').value;
  console.log(loginName);
  document.getElementById('welcomeBanner').innerHTML = 'Welcome, ' + loginName + '!';
  document.getElementById('viewProfile').innerHTML = 'View Profile';

  // Check browser support
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("myName", loginName);
  }
}

function populateData () {
  var temp = localStorage.getItem("myName");
  console.log('temp name', temp)
  document.getElementById('displayName').innerHTML = temp;
  
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
