
var availableTimes = [];

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

function submitTime(){
  var inputTime = document.getElementById("timeAdd").value;
  console.log('Input time:', typeof(inputTime));
  var h = parseInt(inputTime.slice(0,2));
  var m = parseInt(inputTime.slice(3,5));
  console.log('hours/minutes',h, m);

  formattedTime = formatAMPM(h,m);
  console.log("formatted time", formattedTime);

  availableTimes.push(formattedTime);
  document.getElementById("listofTimes").innerHTML = "";
  for (var i = 0; i < availableTimes.length; i++)
  {
       nameList = "<li>" + availableTimes[i] + "</li>";
       document.getElementById("listofTimes").innerHTML += nameList;
  }
  // temp = document.getElementById("timeAdd")
  // var happy = document.createElement("li")
  // var textNode = document.createTextNode(temp.value)
  // happy.appendChild(textNode)
  // var list = document.getElementById("listofTimes")
  // list.appendChild(textNode)
  // temp.value=""
  document.getElementById('defaulttext').innerHTML="Your listed times"
}

function formatAMPM(hours, minutes) {
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
