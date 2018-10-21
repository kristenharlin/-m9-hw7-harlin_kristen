// homework 9 main js

// background to dark gray

var navButton = document.querySelectorAll('#desktop-menu ul li a')[3];
var navButton2 = document.querySelectorAll('#desktop-menu ul li a')[4];

var hoverNav = function (){
  this.classList.toggle('grayout');
};

navButton.onmouseenter = hoverNav;
navButton.onmouseleave = hoverNav;
navButton2.onmouseenter = hoverNav;
navButton2.onmouseleave = hoverNav;

// part ii - showing the locations on click
var locationList = document.getElementById('locations');

var showLocations = function (){
  locationList.classList.toggle('hidediv');

};
