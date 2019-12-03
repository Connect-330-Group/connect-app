availabilityList = [["2:00pm", "3:00pm", "6:00pm"],["8:00am", "1:00pm", "2:00pm"],["10:00am", "11:00am", "6:00pm","2:00pm"],["7:00am", "10:00am", "1:00pm"],["10:00am", "3:00am", "4:00pm","10:00pm"]]
nameList = ["John C.","Kim K.", "Britt L.","Carl G.", "Mom"]
contactedDateList = ["Last Contacted: 1 day ago", "Last Contacted: 1 week ago", "Last Contacted: 6 weeks ago", "Last Contacted: 2 hours ago", "Last Contacted: 3 weeks ago"]

function SetID(id){
  console.log('this runs')
  document.getElementById("nameChange").innerHTML= nameList[id];
  document.getElementById("lastTalked").innerHTML= contactedDateList[id];
  document.getElementById("timeinfo").innerHTML = "";
  for (var i = 0; i < 3; i++)
  {
       time = "<li>" + availabilityList[id][i] + "</li>";
       timeinfo.innerHTML += time;
  }

  var friendContainer = document.getElementById("friendlistContainer");
  var f = friendContainer.getElementsByClassName("filterDiv");

  // Go through and reset all to inactive
  for (var i = 0; i < f.length; i++) {
    f[i].className = f[i].className.replace(" active", "");
    console.log('new name classname', this.className);
  }

  // Set only current to active
  document.getElementById("f" + id).className += " active";
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btnf");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    console.log('new classname', this.className);
  });
}

// var friendContainer = document.getElementById("friendlistContainer");
// var f = friendContainer.getElementsByClassName("filterDiv");
// console.log('f',f)
// for (var i = 0; i < f.length; i++) {
//   f[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     console.log('current??', current)
//     current[0].className = current[0].className.replace(" active", "");
//     console.log('current after', current)
//     this.className += " active";
//     console.log('new name classname', this.className);
//   });
// }

// Initialize
filterSelection("all")
SetID(0)
