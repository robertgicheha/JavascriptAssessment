function isPalindrome(word) {
    // convert the word to lowercase
    word = word.toLowerCase();
    // reverse the word
    var reversedWord = word.split('').reverse().join('');
    // check if the reversed word is equal to the original word
    if (reversedWord === word) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false
