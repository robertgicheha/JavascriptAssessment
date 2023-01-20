
function sumNumbers() {

  var input = prompt("Enter numbers separated by commas:");

  var numbers = input.split(",");

  var sum = numbers.reduce(function(a, b) { return parseInt(a) + parseInt(b); }, 0);
  
  document.getElementById("result").innerHTML = "The sum of the numbers is: " + sum;
}



