// MOCK 3 //

//Swap First and Last Characters 
/*Write a function named replaceFirstLast() which takes a string argument and returns a new 
string with the first and last characters replaced. 
NOTE: If the length is less than 2, return an empty string. 
NOTE: Ignore extra spaces before and after the string. 
 
Examples: 
replaceFirstLast("")         ->  "" 
replaceFirstLast("Hello")       ->  "oellH" 
replaceFirstLast("Tech Global")     -> "lech GlobaT" 
replaceFirstLast("A")       -> "" 
replaceFirstLast("    A      ")      -> "" 
*/

const replaceFirstLast = string => {
    let str = string.trim();
    if(str.length < 2) return "";
    else return str[str.length - 1] + str.slice(1, -1) + str[0];
  }

 
console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A")); 
console.log(replaceFirstLast("    A      "));

//Swap First and Last Words 
/*Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked. 
NOTE: Return empty string if the given string does not have 2 or more words. 
 
Examples: 
swapFirstLastWord("Hello World")      -> "World Hello" 
swapFirstLastWord("I like JavaScript")   -> "JavaScript like I" 
swapFirstLastWord("foo bar foo bar")     -> "bar bar foo foo" 
swapFirstLastWord("")         -> "" 
swapFirstLastWord("  ")         -> "" 
swapFirstLastWord("Hello")        -> "" 
swapFirstLastWord("Hello   ")       -> "" 
*/

const swapFirstLastWord = (string) => {
    string = string.trim();
    let firstWord = string.slice(0, string.indexOf(' '));
    let lastWord = string.slice(string.lastIndexOf(' ') + 1);
    let middle = string.slice(string.indexOf(' '), string.lastIndexOf(' ') + 1);
    if(string.indexOf(' ') === -1) return "";
    else return lastWord + middle + firstWord;
}

console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar")); 
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord("  "));
console.log(swapFirstLastWord("Hello")); 
console.log(swapFirstLastWord("Hello   "));

//Factorial 
/*Write a function named as factorial() which takes a number as an argument and returns the 
factorial of the number when invoked. 
NOTE: Mathematically, the factorial of a non-negative integer n is defined as: 
n! = n × (n-1) × (n-2) × ... × 2 × 1 
Assume you will not be given a negative number. 
 
Examples: 
factorial(5)     -> 120 
factorial(4)    -> 24 
factorial(0)    -> 1 
factorial(1)    -> 1 
*/

const factorial = (number) => {
    let factorial = 1;
    for(let i = 2; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

//recursion
const factorial = (number) => {
    if(number === 0 || number === 1) return 1;
    else return number * factorial(number - 1);
}

console.log(factorial(5));    
console.log(factorial(4));    
console.log(factorial(0));    
console.log(factorial(1));   

//Remove Extra Spaces 
/*Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked. 
 
Examples: 
removeExtraSpaces("Hello")           -> "Hello" 
removeExtraSpaces("    Hello    World  ")       -> "Hello World" 
removeExtraSpaces("   JavaScript is        fun")    -> "JavaScript is fun” 
removeExtraSpaces("")             -> "" 
*/
const removeExtraSpaces = (string) => string.trim().split(' ').filter(word => word !== '').join(' ');
/*
const removeExtraSpaces = (str) => {
    let strArr = str.trim().split(' ');
    strExtraSpacesRemoved = "";
    for(const word of strArr) {
        if(word.length > 0) strExtraSpacesRemoved += `${word} `;
    }
    return strExtraSpacesRemoved;
}
*/
console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("    Hello    World  "));
console.log(removeExtraSpaces("   JavaScript is        fun")); 
console.log(removeExtraSpaces(""));

//First Duplicate Element 
/*Write a function named as firstDuplicate() which takes an array argument and returns the first 
duplicated number in the array when invoked. 
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates 
in the array. For two elements to be considered as duplicated, value and data types of the 
elements must be same. 
 
Examples: 
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])      -> 3 
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])      -> 5 
firstDuplicate([ 5, '5', 3, 7, 4 ])      -> -1 
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])    -> 'abc' 
firstDuplicate([ 1, 2, 3])        -> -1 
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])     -> -1
*/

const firstDuplicate = (array) => {
    for(const el of array) {
        if(array.indexOf(el) !== array.lastIndexOf(el)) return el;
    }
    return -1;
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]));
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ])); 
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]));
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]));
console.log(firstDuplicate([ 1, 2, 3]));
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]));

//Find All Duplicate Elements 
/*Write a function named as getDuplicates() which takes an array argument and returns all the 
duplicated elements in the array when invoked. 
NOTE: Make your code dynamic that works for any array and return empty array if there are no 
duplicates in the array. For two elements to be considered as duplicated, value and data types 
of the elements must be same. 
 
Examples: 
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])      -> [ 0, -7 ] 
getDuplicates([ 1, 2, 5, 0, 7 ])          -> [ ] 
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])    -> [ 'foo', 'a’ ] 
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])       -> [ ] 
*/

/*const getDuplicates = (array) => {
   const arrayOfDuplicates = [];
   for(const el of array) {
    if(array.indexOf(el) !== array.lastIndexOf(el) && !arrayOfDuplicates.includes(el)) arrayOfDuplicates.push(el);
   }
   return arrayOfDuplicates;
}
*/

const getDuplicates  = array => [...new Set(array.filter(x => array.indexOf(x) !== array.lastIndexOf(x)))]

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]));
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]));
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]));

//Reverse String Words
/*Write a function named as reverseStringWords() which takes a string as an argument and 
returns string back with each word separately reversed when invoked. 
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces 
before and after words in the given string. 
 
Examples: 
reverseStringWords("Hello World")      -> "olleH dlroW" 
reverseStringWords("I like JavaScript")     -> "I ekil tpircSavaJ" 
reverseStringWords("Hello")       -> "olleH" 
reverseStringWords("")         -> "" 
reverseStringWords(" ")         -> ""
*/

const reverseStringWords = (string) => string.trim().split('').reverse().join('').split(' ').reverse().join(' ');

/*const reverseStringWords = (string) => {
    let strArray = string.trim().split(' ');
    for(let i= 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].split('').reverse().join('');
    }
    return strArray.join(' ');
}
*/

console.log(reverseStringWords("Hello World")); 
console.log(reverseStringWords("I like JavaScript"));
console.log(reverseStringWords("Hello")); 
console.log(reverseStringWords(""));
console.log(reverseStringWords(" "));

//FizzBuzz 
/*Write a function named as fizzBuzz() which takes 2 number arguments and returns a string 
composed with below requirements when invoked. 
•  You need to find all the numbers within the range of given 2 numbers (both inclusive) 
and store them in a string from smallest to greatest number with a ' | ' separator for each 
number. 
•  You will need to convert numbers divisible by 3 to 'Fizz' 
•  You will need to convert numbers divisible by 5 to 'Buzz' 
•  You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’ 
•  The rest will stay the same. 
NOTE: Make your code dynamic that works for any numbers. 
Assume you will not be given negative numbers. 
 
Examples: 
fizzBuzz(13, 18)    -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)    -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz" 
fizzBuzz(5, 5)    -> "Buzz" 
fizzBuzz(9, 6)    -> "Fizz | 7 | 8 | Fizz"
*/

const fizzBuzz = (num1, num2) => {
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);

    const array = [];

    for(let i = min; i <= max; i++) {
        if(i % 15 === 0) array.push('FizzBuzz'); // if(i % 3 === 0 && i % 5 === 0);
        else if(i % 3 === 0) array.push('Fizz');
        else if(i % 5 === 0) array.push('Buzz');
        else array.push(i);
    }

    return array.join(' | ');
}

console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));

//Palindrome 
/*Write a function named as isPalindrome() which takes a string word as an argument and 
returns true if the word is palindrome or returns false otherwise when invoked. 
NOTE: Palindrome: It is a word that is read the same backward as forward 
Examples: kayak, civic, madam 
NOTE: your function should ignore case sensitivity 
 
Examples: 
isPalindrome("Hello")   -> false 
isPalindrome("Kayak")   -> true 
isPalindrome("civic")   -> true 
isPalindrome("abba")   -> true 
isPalindrome("ab  a")   -> false 
isPalindrome("123454321")   -> true 
isPalindrome("A")   -> true 
isPalindrome("")   -> true 
*/
const isPalindrome = (string) => string.toLowerCase() === string.toLowerCase().split('').reverse().join('');

/*const isPalindrome = (string) => {
    let revString = string.trim().split('').reverse().join('');
    return string.toLowerCase() === revString.toLowerCase();
  }
 */

console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab  a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A")); 
console.log(isPalindrome("")); 

//Prime Number 
/*Write a function named as isPrime() which takes a number as an argument and returns true if 
the number is prime or returns false otherwise when invoked. 
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It 
cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even 
prime number. 
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31... 
NOTE: The smallest prime number is 2 and there is no negative prime numbers. 
 
Examples: 
isPrime(5)   -> true 
isPrime(2)   -> true 
isPrime(29)   -> true 
isPrime(-5)  -> false 
isPrime(0)  -> false 
isPrime(1)  -> false
*/

const isPrime = (number) => {
    if(number < 2) return false;
    else if(number === 2 || number === 3) return true;
    else if(number % 2 === 0 || number % 3 === 0) return false;
    else for(i = 5; i < number; i += 2) {
          if(number % i === 0) return false;
    }
    return true;
  }

console.log(isPrime(5));
console.log(isPrime(2)); 
console.log(isPrime(29)); 
console.log(isPrime(-5)); 
console.log(isPrime(0));
console.log(isPrime(1));

//Add Two Arrays 
/*Write a function named add() which takes two array of numbers as argument and returns a new 
array with sum of given arrays elements. 
NOTE: Be careful about the array sizes as they could be different. 
 
Examples: 
add([3, 0, 0, 7, 5, 10], [6, 3, 2])         -> [9, 3, 2, 7, 5, 10] 
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])     -> [16, 11, 9,  3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])         -> [0, 0, 0, 0] 
*/

const add = (arr1, arr2) => {
    let shortArrSize = Math.min(arr1.length, arr2.length);
    let longArray = arr1.length > shortArrSize ? arr1 : arr2;
    const arr3 = [];

    for(let i = 0; i < shortArrSize; i++) {
        arr3.push(arr1[i] + arr2[i]);
    }
    return [...arr3, ...longArray.slice(shortArrSize)]; // arr3.concat(longArray.slice(end))
}

   const add = (arr1, arr2) => {
    let longArr = Math.max(arr1.length, arr2.length);
    const newArr = [];
      for(let i = 0; i < longArr; i++ ){
      newArr.push((arr1[i] || 0) + (arr2[i] || 0))
    }
    return newArr;
  }

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));      
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

//Remove Duplicates 
/*Write a function named removeDuplicates() which takes an array argument and returns a new 
array with all the duplicates removed. 
 
Examples: 
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])      -> [10, 20, 35, 60, 70] 
removeDuplicates([1, 2, 5, 2, 3])           -> [1, 2, 5, 3] 
removeDuplicates([0, -1, -2, -2, -1])         -> [0, -1, -2] 
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"] 
removeDuplicates(["1", "2", "3", "2", "3"])         -> ["1", "2", "3"]
*/

const removeDuplicates = (array) => {
    const arrayNoDuplicates = [];
    for(const x of array) {
        if(!arrayNoDuplicates.includes(x)) arrayNoDuplicates.push(x);
    }
    return arrayNoDuplicates;
}

const removeDuplicates = (array) => array.reduce((result, x) => !result.includes(x) ? result.concat(x): result, []);

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])) 
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));

//Array Factorial 
/*Write a function named arrFactorial() which takes an array of numbers as argument and return 
the array with every number replaced with their factorials. 
 
Examples: 
arrFactorial([1, 2, 3 ,4])     -> [1, 2, 6, 24] 
arrFactorial([0, 5])       -> [1,120] 
arrFactorial([5 , 0, 6])     -> [120, 1, 720] 
arrFactorial([])       -> [] 
 */

const arrFactorial = (array) => array.map(num => {
    let factorial = 1;
    for(let i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
});


 //recursion
 /*const factorial = (num) => {
    if(num === 0 || num === 1) return 1;
    else return num * factorial(num - 1);
 }
*/
 
 //const arrFactorial = (array) => array.map(num => factorial(num));

console.log(arrFactorial([1, 2, 3 ,4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5 , 0, 6]))
console.log(arrFactorial([]));

//Reverse Number
/*
Requirement:
Write a function named reverseNumber() which takes a number argument 
and returns it back reversed without converting it to a String.
Note: Do not convert number to string to complete the task.

Examples:
reverseNumber(371)  -> 173
reverseNumber(123)  -> 321
reverseNumber(12)  -> 21
reverseNumber(0)  -> 0
reverseNumber(111)  -> 111
*/
const reverseNumber = (number) => {
    let newNum = '';
    if (number === 0) return 0; 
    else{
        while (number > 0) {
        newNum += (number % 10);
        number = Math.floor(number / 10);
        }
    }
   return newNum;
}
/*
const reverseNumber = num => {
    let reversed = 0;

    for(let i = num; i > 0; i = Math.floor(i/10)){
        reversed = (reversed * 10) + (i % 10)
    }
    return reversed
}
    */
console.log(reverseNumber(371));
console.log(reverseNumber(123));
console.log(reverseNumber(21));
console.log(reverseNumber(0));
console.log(reverseNumber(111));

//Find Biggest Number 
/*
Write a function named findBiggestNumber() which takes a string argument and returns the 
biggest number appears in the string. 
 
Examples: 
findBiggestNumber("abc$")      -> 0 
findBiggestNumber("a1b4c  6#")    -> 6 
findBiggestNumber("ab110c045d")    -> 110 
findBiggestNumber("525")      -> 525 
findBiggestNumber("3 for 10 dollars")  -> 10 
*/

const findBiggestNumber = string => {
    let strNum = "";
    for(const x of string) {
        if(x <= '9' && x >= '0') strNum += x;
        else strNum += " "
    }

    return Math.max(...strNum.split(' '))
}

console.log(findBiggestNumber("abc$"))
console.log(findBiggestNumber("a1b4c  6#"))
console.log(findBiggestNumber("ab110c045d"))
console.log(findBiggestNumber("525")) 
console.log(findBiggestNumber("3 for 10 dollars"))

//Find Sum Numbers 
/*Write a function named findSumNumbers() which takes a string argument and returns sum of 
the all numbers appears in the string. 
 
Examples: 
findSumNumbers("abc$")      -> 0 
findSumNumbers("a1b4c  6#")    -> 11 
findSumNumbers("ab110c045d")    -> 155 
findSumNumbers("525")      -> 525 
findSumNumbers("3 for 10 dollars")    -> 13 
*/

const findSumNumbers = string => {
    let strNum = "";

    for(const x of string) {
        if(x <= '9' && x >= '0') strNum += x;
        else strNum += " "
    }

    return strNum.split(' ').reduce((sum, x) => sum = sum + Number(x), 0)
}

console.log(findSumNumbers("abc$"))
console.log(findSumNumbers("a1b4c  6#"))
console.log(findSumNumbers("ab110c045d"))
console.log(findSumNumbers("525")) 
console.log(findSumNumbers("3 for 10 dollars"))

//Is Power Of 3 
/*
Write a function named isPowerOf3() which takes a number argument and returns true if given 
number is equal to 3 power of the X. Otherwise, return false. 
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243.... 
NOTE: Ignore negative scenarios. 
 
Examples: 
isPowerOf3(1)     -> true 
isPowerOf3(2)     -> false 
isPowerOf3(3)     -> true 
isPowerOf3(27)    -> true 
isPowerOf3(100)    -> false 
isPowerOf3(81)    -> true 
isPowerOf3(9)     -> true
*/

const isPowerOf3 = (number) => {
    if(number === 1) return true;
    for(let i = 3; i <= number ; i *= 3) {
        if(number === i) return true;
    }
    return false;
}

/*const isPowerOf3 = (num) => {
    if(num === 1) return true
    if(num < 1) return false

    return isPowerOf3(num / 3);
}
*/

//Fibonacci Series 1 
/*
Write a function named fibonacciSeries1() which takes a number n argument and returns the 
n series of Fibonacci numbers as an array.  
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21 
 
Examples: 
fibonacciSeries1(3)    -> [0, 1, 1] 
fibonacciSeries1(5)    -> [0, 1, 1, 2, 3] 
fibonacciSeries1(7)    -> [0, 1, 1, 2, 3, 5, 8] 
fibonacciSeries1(8)    -> [0, 1, 1, 2, 3, 5, 8, 13] 
fibonacciSeries1(1)    -> [0] 
fibonacciSeries1(2)    -> [0, 1] 
*/
const fibonacciSeries1 = (num) => {
    if(num === 1) return [0]
    if(num === 2) return [0, 1]

    let result = [0, 1]

    for(let i = 2; i < num; i++){
        result.push(result[result.length - 1] + result[result.length - 2])
    }
    return result
}

//Fibonacci Series 2 
/*
Write a function named fibonacciSeries2() which takes a number n argument and returns the 
nth series of Fibonacci number as a number. 
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21 
 
Examples: 
fibonacciSeries2(2)    -> 1 
fibonacciSeries2(4)    -> 2 
fibonacciSeries2(8)    -> 13 
fibonacciSeries2(9)    -> 21 
fibonacciSeries2(1)    -> 0
*/

const fibonacciSeries2 = number => {
    if(number === 1) return 0;
    if(number === 2) return 1;

    let fibSeries = [0, 1];

    for(let i = 2; i < number; i++) {
        fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2])
    }

    return fibSeries[fibSeries.length - 1]
}

console.log(fibonacciSeries2(2));
console.log(fibonacciSeries2(4)); 
console.log(fibonacciSeries2(8)); 
console.log(fibonacciSeries2(9)); 
console.log(fibonacciSeries2(1)); 

//Find Uniques 
/*
Write a function named findUniques() which takes two array of number arguments and returns 
the array which has only the unique values from both given arrays. 
NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other array. 
 
Examples: 
findUniques([], [])      -> [] 
findUniques([], [1, 2, 3, 2])    -> [1, 2, 3] 
findUniques([1, 2, 3, 4], [3, 4, 5, 5])  -> [1, 2, 5] 
findUniques([8, 9], [9, 8, 9])    -> [] 
findUniques([-1, -2], [1, 2])    -> [-1, -2, 1, 2] 
*/
 
const findUniques = (arr1, arr2) => [...new Set([...arr1,...arr2].filter(x => !(arr1.includes(x) && arr2.includes(x))))]


console.log(findUniques([], [])) 
console.log(findUniques([], [1, 2, 3, 2]))
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5]))
console.log(findUniques([8, 9], [9, 8, 9])) 
console.log(findUniques([-1, -2], [1, 2]))

//Is Armstrong 
/*
Write a function named isArmstrong() which takes a number argument and returns true if 
given number is armstrong, return false otherwise. 
NOTE: An armstrong number is a number that is equal to the sum of its own digits raised to the 
power of the number of digits. In other words, an n-digit number is an Armstrong number if the 
sum of its digits, each raised to the nth power, is equal to the number itself. 
•  Let's take an example to understand it better. Consider the number 153. 
•  To determine if 153 is an armstrong number, we need to check if the sum of its 
digits, each raised to the power of the number of digits, equals the original 
number. 
•  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 
•  In this case, the sum of the individual digits raised to the power of 3 (the number 
of digits in 153) is equal to the original number, which means 153 is an armstrong 
number. 
 
Examples: 
isArmstrong(153)     -> true 
isArmstrong(123)     -> false 
isArmstrong(1634)     -> true 
isArmstrong(153)     -> true 
isArmstrong(1111)     -> false 
*/

const isArmstrong = number => {
    let sum = 0;
    let arr = number.toFixed().split('');

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i] ** arr.length;
    }

    return  number === sum;
}

console.log(isArmstrong(153))
console.log(isArmstrong(123))
console.log(isArmstrong(1634)) 
console.log(isArmstrong(153))
console.log(isArmstrong(1111))
 
//Is Anagram 
/*
Write a function named isAnagram() which takes two string arguments and returns true if the 
given strings are anagram. Return false otherwise. 
NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or 
phrase. In the context of strings, checking if two strings are anagrams of each other means 
verifying if they contain the same characters in the same quantities, regardless of the order of 
those characters. 
NOTE: This method is case-insensitive and ignore the white spaces. 
 
Examples: 
isAnagram("Apple", "Peach")     -> false 
isAnagram("listen", "silent")      -> true 
isAnagram("astronomer", "moon starer")  -> true 
isAnagram("CINEMA", "iceman")    -> true 
isAnagram("123", "1234")    -  > false 
*/
 


//Count Palindrome
/* 
Write a function named countPalindrome() which takes a string and returns the number 
of  palindrome words. 
Note: A palindrome word is a word that reads the same forwards and backwards. Example: 
level, radar, deed, refer. 
 
Examples: 
countPalindrome("Mom and Dad")        -> 2 
countPalindrome("See you at noon")       -> 1 
countPalindrome("Kayak races attracts racecar drivers")  -> 2 
countPalindrome("")        -> 0 
countPalindrome("No palindrome here")  -> 0 
 */

const countPalindrome = string => {
    if (string === "") return 0;
    else return string.toLowerCase().split(' ').filter(x => x === x.split('').reverse().join('')).length
}

console.log(countPalindrome("Mom and Dad"))
console.log(countPalindrome("See you at noon"))
console.log(countPalindrome("Kayak races attracts racecar drivers"))
console.log(countPalindrome(""))
console.log(countPalindrome("No palindrome here")) 

//Can Form String 
/*
Write a function named canFormString() which takes two string arguments and returns true if 
the second string can be formed by rearranging the characters of first string. Return false 
otherwise. 
NOTE: This method is case-insensitive and ignore the white spaces. 
 
Examples: 
canFormString("Hello", "Hi")          -> false 
canFormString("programming", "gaming")      -> true 
canFormString("halogen", "hello")        -> false 
canFormString("CONVERSATION", "voices rant on")  -> true 
canFormString("12", "123")          -> false 
*/
 
const canFormString = (str1, str2) => {
    const str1Arr = str1.toLowerCase().split('')
    const str2Arr = str2.toLowerCase().split('').filter(x => x != ' ');

   if(str2Arr.length > str1Arr.length) return false;
   else {
       for(const x of str1Arr) {
           if(str2Arr.includes(x)) str2Arr.splice(str2Arr.indexOf(x), 1);
   }
  return str2Arr.length === 0;
  }
}

const canFormString = (str1, str2) => {
    
    let duplicated = "";
 
    let strF = str1.split('').join(' ')
    let str2NoSpace = str2.toLowerCase().split(' ').join('')
 
   for(let i=0; i<= str1.length; i++){
     if(strF.toLowerCase().includes(str2NoSpace[i])){
       strF = strF.replace(str2NoSpace[i], " ")
       duplicated += str2NoSpace[i]
     }
   }
   return duplicated === str2NoSpace;
   }
     
console.log(canFormString("Hello", "Hi"));
console.log(canFormString("programming", "gaming"));
console.log(canFormString("halogen", "hello"));
console.log(canFormString("CONVERSATION", "voices rant on"));
console.log(canFormString("12", "123"));

//Count Occurrence 
/*Write a function named countOccurrence() which takes two string arguments and returns how 
many times that the first string can form the second string. 
NOTE: This method is case-insensitive and ignore the white spaces. 
 
Examples: 
countOccurrence("Javascript", "Java")  -> 1 
countOccurrence("Hello", "World")    -> 0 
countOccurrence("Can I can a can", "anc")  -> 3 
countOccurrence("Hello", "l")     -> 2 
countOccurrence("IT conversations", "IT")  -> 2 
*/
 
const countOccurrence = (str1, str2) => {
    let arrOfOccurrences = []
  
    for(char of str2){
      arrOfOccurrences.push(str1.split('').filter(c => c.toLowerCase() === char.toLowerCase()).length)
    }
    return arrOfOccurrences.sort()[0];
  
}
  
console.log(countOccurrence("Javascript", "Java"));
console.log(countOccurrence("Hello", "World"));
console.log(countOccurrence("Can I can a can", "anc"));
console.log(countOccurrence("Hello", "l"));
console.log(countOccurrence("IT conversations", "IT"));
 
 
 