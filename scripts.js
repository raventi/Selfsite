document.addEventListener('DOMContentLoaded', function () {
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);
 

/* Set the width of the side navigation to 250px and the left margin of the
 
page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.transform = "translate(250px,0px)";
  document.getElementById("main").style.opacity = "0.4";
  var toggles = document.getElementsByClassName("open-toggle");

  for (var i = 0; i < toggles.length; i++) {
    toggles[i].innerHTML = "CLOSE";
    toggles[i].onclick = function() { closeNav(); }
    }
}
 
/* Set the width of the side navigation to 0 and the left margin of the
 
page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.transform = "translate(0px,0px)";
  document.getElementById("main").style.opacity = "1";

  var toggles = document.getElementsByClassName("open-toggle");

  for (var i = 0; i < toggles.length; i++) {
    toggles[i].innerHTML = "OPEN";
    toggles[i].onclick = function() { openNav(); }
    }  
}


var makeItRain = function() {
  //clear out everything
  $('.rain').empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
}

$('body').toggleClass('splat-toggle');
$('.splat-toggle.toggle').toggleClass('active');
makeItRain();