// Task - 1
/*Requirement:
Write a function named countPos() which takes an array of numbers as an argument and returns how 
many elements are positive  when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67])  -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
countPos([0, -1, -2, -3])  -> 0
*/

// Solution with loop
function countPos(array) {
    let count = 0;
    for(const number of array){
        if(number > 0) count++;
    }
    return count;
}

// Solution with filter() method

const countPos = (array) => {
    return array.filter((number) => number > 0).length;
}
// Solution with reduce() method
function countPos(array) {
    return array.reduce((count, number) => number > 0 ? count + 1 : count, 0);
}
 //Function with arrow function
const countPos = (array) => array.reduce((count, number) => number > 0 ? count + 1 : count, 0);

console.log(countPos);

console.log(countPos([-45, 0, 0, 34, 5, 67])); 
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

// Task - 2
/*Requirement:
Write a function named countA() which takes a string argument and returns how many A or a there are in the 
given string when invoked.
NOTE: Ignore case sensitivity. 
Examples:
countA("TechGlobal is a QA bootcamp")  -> 4
countA("QA stands for Quality Assurance")  -> 5
countA("Cypress")  -> 0
*/

/*const countA = (str) => {
    let count = 0;
    let strA = str.toUpperCase();
    for(let i = 0; i < strA.length; i++) {
        if(strA[i] === 'A') count++;
    }
    return count;
}
*/

const countA = (str) => {
    let count = 0;
   for(char of str){
    if(char.toLowerCase() ==='a')
    count++
   }
   return count;
}

console.log(countA("TechGlobal is a QA bootcamp"))  
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

//Task - 3
/*Requirement: 
Write a function named as countVowels() which takes a string word as an argument and returns the count of the vowel 
letters when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello")  -> 2
countVowels("Hello World")  -> 3
countVowels("JavaScript is fun")  -> 5
countVowels("")  -> 0
*/

const countVowel = (str) => {
    let count = 0;
    let i = 0;
    while(i < str.length){
        if('AEOUIaeoui'.includes(str[i])) count++;
        i++;
    }
    return count;
}

// Using CharacterHelper function

const {CharacterHelper} = require('../utils/CharacterHelper.js');

const countVowels = (str) => {
    let count = 0;
    let i = 0;
    while(i < str.length){
        if(CharacterHelper.isVowel(str[i])) count++;
        i++;
    }
    return count;
}


console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

//Task - 4
/*Requirement: 
Write a function named as countConsonants() which takes a string word as an argument and returns the count of the 
consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant 
letter.
Examples:
countConsonants("Hello")  -> 3
countConsonants("Hello World")  -> 8
countConsonants("JavaScript is fun")  -> 12
countConsonants("")  -> 0
*/
const countConsonants = (str) => {
    let count = 0;
    let i = 0;
    while(i < str.length){
        if(!('aeoui'.includes(str[i].toLowerCase()))) count++;
        i++;
    }
    return count;
}

console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

//Task - 5
/*Requirement:
Write a function named countWords() which takes a string argument and returns the total count of words in 
the given string when invoked.
NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords("     Javascript is fun       ")  -> 3
countWords("Cypress is an UI automation tool.    ") -> 6 
countWords("1 2 3 4") -> 4
*/

const countWords = (str) => {
    let strArray = str.trim().split(" ");
    return strArray.length;
} 

console.log(countWords("     Javascript is fun       "))
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));

//Task - 6
/*Requirement:
Write a function named as factorial() which takes a number as an argument and returns the factorial of the 
number when invoked.
NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5)  -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/

const factorial = (number) => {
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial *= i;
    }
    return factorial;
}

console.log(factorial(5));
console.log(factorial(4)); 
console.log(factorial(0)); 
console.log(factorial(1)); 

//Task - 7
/*Requirement: 
Write a function named as isPalindrome() which takes a string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello")  -> false
isPalindrome("Kayak")  -> true 
isPalindrome("civic")  -> true
isPalindrome("abba")  -> true
isPalindrome("ab  a")  -> false
isPalindrome("123454321")  -> true
isPalindrome("A")  -> true
isPalindrome("")  -> true
*/

function isPalindrome(str) {
    let strLowerCase = str.toLowerCase();
    let reverseStrLowerCase = strLowerCase.split('').reverse().join('');
        
        console.log(strLowerCase === reverseStrLowerCase);
    }
  
  isPalindrome("Hello"); 
  isPalindrome("Kayak"); 
  isPalindrome("civic");  
  isPalindrome("abba") ; 
  isPalindrome("ab  a");  
  isPalindrome("123454321"); 
  isPalindrome("A");
  isPalindrome("");

  //Task - 8
  /*Requirement: 
Write a function named as countMultipleWords() which takes an array as an argument and returns the count of the elements 
that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) -> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) -> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) -> 4
countMultipleWords([ ]) -> 0
*/

function countMultipleWords(array) {
    let count = 0;
    for(const element of array){
        if(element.trim().indexOf(' ') >= 0) count++;
    }
    return count;
}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]));
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]));
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]));
console.log(countMultipleWords([ ]));

//Task - 9
/*Requirement: 
Write a function named as count3OrLess() which takes a string word as an argument and returns the count of the words 
that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello")  -> 0
count3OrLess("Hi John")  -> 1
count3OrLess("JavaScript is fun")  -> 2
count3OrLess("My name is John Doe")  -> 3
count3OrLess("")  -> 0
*/

const count3OrLess = (str) => {
    let count = 0;
    const strArr = str.trim().split(' ');
    strArr.forEach(word => {
        if(word.length > 0 && word.length <= 3) count++;
    });
    return count;
}

console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));

//Task - 10
/*Requirement:
Write a function named as isPrime() which takes a number as an argument and returns true if the number 
is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be divided 
by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
Examples:
isPrime(5)  -> true
isPrime(2)  -> true
isPrime(29)  -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false
*/

const isPrime = (number) => {
   if(number < 2) return false;
   if(number === 2 || number === 3) return true; 
   if(number % 2 === 0 || number % 3 ===0) return false;
    
   for(let i = 5; i < number; i += 2) {
        if(number % i === 0) return false;
   };
   
   return true;
};

console.log(isPrime(4));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

//Task - 11
/*Requirement:
Write a function named add() which takes two array of numbers as argument and returns a new array with sum of 
given arrays elements.
NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2] )  -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])  -> [16, 11, 9, 3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])  -> [0, 0, 0, 0]
*/

function add(arr1, arr2){
    let end = Math.min(arr1.length, arr2.length);
    let longArray = arr1.length > end ? arr1 : arr2;
    let arr3 =[];
    for(i = 0; i < end; i++){
        arr3.push(arr1[i] + arr2[i]);
    }
    return arr3.concat(longArray.slice(end));
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

//Task - 12
/*Requirement: 
Write a function named as removeExtraSpaces() which takes a string word as an argument and returns the string back with 
all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello")  -> "Hello" 
removeExtraSpaces("      Hello    World     ")  -> "Hello World" 
removeExtraSpaces("     JavaScript is          fun")  -> "JavaScript is fun"
removeExtraSpaces("")  -> ""
*/

function removeExtraSpaces(str) {
    let strArr = str.trim().split(' ');
    strExtraSpacesRemoved = "";
    for(const word of strArr){
        if (word !== '') 
        strExtraSpacesRemoved = strExtraSpacesRemoved.concat(' ', word);
    }
    
    return strExtraSpacesRemoved;
}

console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));
console.log(removeExtraSpaces(""));

//Task - 13
/*Requirement: 
Write a function named findClosestTo10() which takes an array of numbers as argument and returns the closest element 
to 10 from the given array.
NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57] )  -> 5
findClosestTo10([10, -13, 8, 12, 15, -20])  -> 8
findClosestTo10([0, -1, -2])  -> 0
*/

   function findClosestTo10(arr){
        let closestTo10 = arr[0]; 
        let minDiff = Math.abs(closestTo10 - 10);

        for(let i = 1; i < arr.length; i++){
        if(arr[i] === 10 ) continue;
        if(minDiff === 0 || Math.abs(arr[i] - 10) < minDiff){
            closestTo10 = arr[i];
            minDiff = Math.abs(arr[i] - 10);
            }
        }
        return closestTo10;
    }
        
   console.log(findClosestTo10([10, -13, 5, 70, 15, 57] ));
   console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));
   console.log(findClosestTo10([0, -1, -2]));

   // Another solution

   function findClosestTo10(arr){
        arr.includes(10) ? arr : arr.push(10);
        let arrSorted = arr.sort((x, y) => (x - y));
        let indexOf10 = arrSorted.indexOf(10);

        if(arrSorted.length === 1 && arrSorted[0] === 10) return arrSorted[0];
        else if((indexOf10 === arrSorted.length - 1) || (Math.abs(arrSorted[indexOf10 + 1] - 10) >= (Math.abs(arrSorted[indexOf10 - 1] - 10))))
        return arrSorted[indexOf10 - 1];
        else if((indexOf10 === 0) || (Math.abs(arrSorted[indexOf10 + 1] - 10) < (Math.abs(arrSorted[indexOf10 - 1] - 10))))
        return arrSorted[indexOf10 + 1];
    }

    console.log(findClosestTo10([10, -13, 5, 70, 15, 57] ));
    console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));
    console.log(findClosestTo10([0, -1, -2]));


// Task - 14
/*Requirement: 
Write a function named as isEmailValid() which takes a string email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.
NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one "@" character.
•should be in the given format 
<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least characters before @ character.
•There should be at least 2 characters between @ and . 
Characters.
•There should be at least 2 characters after the . character.
Examples:
isEmailValid("")  -> false
isEmailValid("@gmail.com")  -> false
isEmailValid("johndoe@yahoo")  -> false
isEmailValid("johndoe@.com")  -> false
isEmailValid("a@outlook.com")  -> false
isEmailValid("johndoe@a.com")  -> false
isEmailValid("johndoe@@gmail.com")  -> false
isEmailValid("johndoe@gmail.com")  -> true
*/

function isEmailValid(string) {
        console.log(!(string.includes(" ")) 
        && ((string.includes('@')) && (string.indexOf('@') === string.lastIndexOf('@'))) 
        && ((string.includes('.')) && (string.indexOf('.') === string.lastIndexOf('.'))) 
        && ((string.indexOf('@') >= 2) && (string.indexOf('.') < string.length - 2)) 
        && (string.indexOf('@') < string.indexOf('.') - 2));
}
   
    isEmailValid("");
    isEmailValid("@gmail.com");
    isEmailValid("johndoe@yahoo"); 
    isEmailValid("johndoe@.com");  
    isEmailValid("a@outlook.com"); 
    isEmailValid("johndoe@a.com");
    isEmailValid("johndoe@@gmail.com");
    isEmailValid("johndoe@gmail.com");

//Task - 15
/*Requirement: 
Write a function named as isPasswordValid() which takes a string email as an argument and returns true if the password 
is valid or returns false otherwise when invoked.
NOTE: A VALID PASSWORD:
•should have length of 8 to 16 (both inclusive).
•should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
•should NOT have any space.
Examples:
isPasswordValid("")  -> false
isPasswordValid("abcd")  -> false
isPasswordValid("abcd1234")  -> false
isPasswordValid("Abcd1234")  -> false
isPasswordValid("Chicago12345US!#$%")  -> false
isPasswordValid("Abcd1234$")  -> true
isPasswordValid("Chicago123$")  -> true
isPasswordValid("Test1234#")  -> true
*/
const {CharacterHelper} = require('../utils/CharacterHelper.js');

const isPasswordValid = (password) => {
    let arrStr = password.split('');
    console.log((arrStr.length >= 8 && arrStr.length <= 16 && arrStr.every(char => arrStr.indexOf(char) !== -1) &&
        arrStr.some(char => CharacterHelper.isLowerCase(char)) && arrStr.some(char => CharacterHelper.isUpperCase(char)) &&
        arrStr.some(char => CharacterHelper.isDigit(char)) && arrStr.some(char => CharacterHelper.isSpecial(char))));
    }
    
isPasswordValid("");
isPasswordValid("abcd");
isPasswordValid("abcd1234");
isPasswordValid("Abcd1234");
isPasswordValid("Chicago12345US!#$%");
isPasswordValid("Abcd1234$");
isPasswordValid("Chicago123$");
isPasswordValid("Test1234#");
