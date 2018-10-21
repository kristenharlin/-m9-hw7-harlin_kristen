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

navButton.onclick = showLocations;

// part iii decrease opacity of images on hovernav

var gridGallery = document.getElementById('sammys-story');
var gridGallery2 = document.getElementById('sammich-menu');
var gridGallery3 = document.getElementById('order-online');
var gridGallery4 = document.getElementById('auburn');
var gridGallery5 = document.getElementById('tuscaloosa');
var gridGallery6 = document.getElementById('gainesville');

//var gridImage = gridGallery.children;

var hoverLight = function (){
  this.classList.toggle('lighten');
};

gridGallery.onmouseenter = hoverLight;
gridGallery2.onmouseenter = hoverLight;
gridGallery3.onmouseenter = hoverLight;
gridGallery4.onmouseenter = hoverLight;
gridGallery5.onmouseenter = hoverLight;
gridGallery6.onmouseenter = hoverLight;
gridGallery.onmouseleave = hoverLight;
gridGallery2.onmouseleave = hoverLight;
gridGallery3.onmouseleave = hoverLight;
gridGallery4.onmouseleave = hoverLight;
gridGallery5.onmouseleave = hoverLight;
gridGallery6.onmouseleave = hoverLight;
