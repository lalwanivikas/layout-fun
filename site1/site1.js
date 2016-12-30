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