/*
  Pinterest style boxes
*/

var colCount = 0;
var colWidth = 0;
var margin = 8;
var containerWidth = 0;
var boxes = [];

// DOM selectors
var boxContainer = document.querySelector('.box-container');
var boxElements = document.querySelectorAll('.box');

function positionBoxes() {
  boxElements = document.querySelectorAll('.box');
  boxElements.forEach(function(element, index, array) {
    var min = Math.min.apply(null, boxes);
    var index = boxes.indexOf(min);
    var leftPos = index * (colWidth + margin);
    element.style.left = leftPos + 'px';
    element.style.top = min + 'px';
    boxes[index] = min + element.offsetHeight + margin;
  });
}

function setupBoxes() {
  boxes = [];
  containerWidth = boxContainer.offsetWidth;
  colWidth = document.querySelector('.box').offsetWidth;
  colCount = Math.floor( containerWidth / (colWidth + margin) );
  for(var i = 0; i < colCount; i++) {
    boxes.push(margin);
  }
  positionBoxes();
}

window.addEventListener('resize', function(){
  setupBoxes();
});

window.onload = setupBoxes;


/*
  Navigation
*/

var navBar = document.querySelector('nav');
var pushMenuIcon = document.querySelector('.push-menu-icon');
var dropdowns = document.querySelectorAll('.dropdown');
var dropdownContents = document.querySelectorAll('.dropdown-content');

pushMenuIcon.addEventListener('click', function() {
  navBar.classList.toggle('show-nav');
  document.body.classList.toggle('push-left');
  dropdownContents.forEach(function(dropdownContent) {
    dropdownContent.classList.remove('desktop');
  })
});

dropdowns.forEach(function(dropdown) {
  dropdown.addEventListener('click', function(e) {
    var otherDropdown = document.querySelector('.show-dropdown-content');
    if(otherDropdown) {
      otherDropdown.classList.remove('show-dropdown-content');
    }
    var dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show-dropdown-content');
  });
});
