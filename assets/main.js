// Grab elements
var input = document.getElementById("resultValue");
var btn = document.getElementById("checkBtn");
var display = document.getElementById("display");

// Add eventListener
btn.addEventListener('click', handleBtn);

function handleBtn() {
  var inputMark = input.value;
  var intMark = parseInt(inputMark);
  var showGrade;

  if (isNaN(intMark) || intMark < 0 || intMark > 100) {
    display.innerHTML = `Please Enter a valid Mark.`
  } else {
    if (intMark < 50) {
      showGrade = "F";
    } else if (intMark < 60) {
      showGrade = "D";
    } else if (intMark < 70) {
      showGrade = "C";
    } else if (intMark < 80) {
      showGrade = "B";
    } else if (intMark < 90) {
      showGrade = "A";
    } else {
      showGrade = "A+";
    }
    display.innerHTML = `Your Grade is: <span id="gradeValue">${showGrade}<span>`;
  }
}