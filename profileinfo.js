
function populateData () {
  var temp = localStorage.getItem("myName");
  var temp1 = localStorage.getItem("myEmail");
  var temp2 = localStorage.getItem("myAge");
  var temp3 = localStorage.getItem("myGender");
  if(temp!=null && document.getElementById('displayName')!=null)
  {
    document.getElementById('displayName').innerHTML = temp;
  }
  if(temp1!=null && document.getElementById('displayEmail')!=null)
  {
  document.getElementById('displayEmail').innerHTML = temp1;
  }

  if(temp2!=null && document.getElementById('displayAge')!=null)
  {
  document.getElementById('displayAge').innerHTML = temp2;
  }
  if(temp3!=null && document.getElementById('displayGender')!=null)
  {
  document.getElementById('displayGender').innerHTML = temp3;
  }
}
