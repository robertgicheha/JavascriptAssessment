//prompt the user to input the numbers
var prompt;
var i = 0;
var sum = 0;
var input = (prompt("Input the numbers:"));
//Split the nubers using a comma
var numbers = input.split(",");
//Declare the sum to zero
for (var i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i])
}
console.log("The sum of the numbers is: " + sum);

// NUMBER_OF_INPUTS = 10;

// var i = 0;     // Loop iterator
// var userInput; // Input from user
// sum = 0; //initialise sum

// // Collect inputs
// for(i=0; i<NUMBER_OF_INPUTS; i++)
// {   userInput = parseInt(prompt('Enter input '+(i+1)+' of '+NUMBER_OF_INPUTS));
//     sum += userInput;
//     sum /= NUMBER_OF_INPUTS;
// }
// console.log("The sum of the numbers is: " + sum);