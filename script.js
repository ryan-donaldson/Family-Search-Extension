$(document).ready(function() {
  $('#IDtext').keydown(function (event) {
  // // Allow control keys and dash
  if (event.keyCode == 8 || // backspace
      event.keyCode == 9 || // tab
      event.keyCode == 13 || // enter
      event.keyCode == 37 || // left arrow
      event.keyCode == 39 || // right arrow
      (event.ctrlKey === true && 
       (event.keyCode == 65 || // ctrl+A
        event.keyCode == 67 || // ctrl+C
        event.keyCode == 86 || // ctrl+V
        event.keyCode == 88)) || // ctrl+X
      event.keyCode == 109 || // numpad subtract
      event.keyCode == 189 || // dash
      event.keyCode == 116) { // F5
          return; // allow the keypress
      }

  // Insert dash after 3rd and 7th character
  var length = $(this).val().length;
  if (length == 4) {
      $(this).val($(this).val() + '-');
  }
 }
  )});

// Save data to localStorage for all text boxes
function saveInputs() {
  var textboxes = document.querySelectorAll(".inputBox");
  textboxes.forEach(function(textbox, index) {
    localStorage.setItem("savedText" + index, textbox.value);
  });
}

// Load data from localStorage for all text boxes
function loadInputs() {
  var textboxes = document.querySelectorAll(".inputBox");
  textboxes.forEach(function(textbox, index) {
    var savedText = localStorage.getItem("savedText" + index);
    if (savedText) {
      textbox.value = savedText;
    }
  });
}

// Call loadInputs when the extension is opened
document.addEventListener('DOMContentLoaded', loadInputs);

// Add event listener to each text box to save text whenever it changes
document.querySelectorAll(".inputBox").forEach(function(textbox) {
  textbox.addEventListener('input', saveInputs);
});