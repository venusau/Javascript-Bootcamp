// Get the element by its ID
const element = document.getElementById('myElement');

// Add a click event listener
element.addEventListener('click', function() {
  // Toggle between two classes using classList.toggle()
  this.classList.toggle('initialClass');
  this.classList.toggle('newClass');
});
