function isArmstrongNumber(num) {
    var numString = num.toString();
    var numLength = numString.length;
    var sum = 0;
    for (var i = 0; i < numLength; i++) {
        var digit = parseInt(numString.charAt(i));
        sum += Math.pow(digit, numLength);
    }
    return sum === num;
}
console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(370)); // true
console.log(isArmstrongNumber(371)); // true
console.log(isArmstrongNumber(407)); // true
console.log(isArmstrongNumber(1634)); // true
console.log(isArmstrongNumber(8208)); // true
console.log(isArmstrongNumber(9474)); // true
console.log(isArmstrongNumber(12)); // false
