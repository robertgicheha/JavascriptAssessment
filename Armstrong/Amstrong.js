function checkArmstrong() {

	var number = document.getElementById("number").value;
	var digits = number.split("");
	var length = digits.length;
	var sum = digits.reduce(function(acc, curr) {
	  return acc + Math.pow(curr, length);
	}, 0);
	if (number == sum) {
	  document.getElementById("result").innerHTML = "The number is an Armstrong number.";
	} else {
	  document.getElementById("result").innerHTML = "The number is not an Armstrong number.";
	}
  }
