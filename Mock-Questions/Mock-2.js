// Double or Triple Word
/*Write a function named as doubleOrTripleWord() which takes a string word as an argument 
and returns the given word back tripled if the string length is even or doubled if the string length 
is odd when invoked. 
 
Examples: 
doubleOrTripleWord("Tech")     -> "TechTechTech" 
doubleOrTripleWord("Apple")     -> "AppleApple” 
doubleOrTripleWord("")       -> "" 
doubleOrTripleWord(" ")       -> " " 
doubleOrTripleWord("1")       -> "11" 
doubleOrTripleWord("22")       -> "222222" 
*/
const doubleOrTripleWord = (string) => {
    if(string.length % 2 === 0) return string.repeat(3); // or string + string +string // string.concat(string, string)
    else return string.repeat(2);    
}

const doubleOrTripleWord = (str) => (str.length % 2 === 0) ? str.repeat(3) : str.repeat(2);

console.log(doubleOrTripleWord("Tech")); 
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));

//First and Last Words
/*Write a function named as firstlastWord() which takes a string word as an argument and 
returns the first and last words from the given string when invoked. 
NOTE: Return empty string if the given string does not have any word. 
 
Examples: 
firstLastWord("Hello World")     -> "HelloWorld" 
firstLastWord("I like JavaScript")    -> "IJavaScript” 
firstLastWord("Hello")       -> "HelloHello" 
firstLastWord("")         -> "" 
firstLastWord("  ")       -> "" 
*/
const firstLastWord = (string) => {
    let arr = string.trim().split(' ');
    return arr[0] + arr[arr.length - 1];
}

const firstLastWord = (string) => {
      let array = string.trim().split(" ");
      return array[0].concat(array.at(-1));
    }

const firstLastWord = (string) => {
        str = string.trim();
        if(str.includes(" ")) return str.slice(0, str.indexOf(" ")) + str.slice(str.lastIndexOf(" ") + 1);
        else return str + str;
    }

    const firstLastWord = (string) => {
        const array = string.trim().split(' ');
        return array[0] + array.slice(-1);
      }


console.log(firstLastWord("    Hello World"));
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello")); 
console.log(firstLastWord(""));
console.log(firstLastWord("  "));

//Has Vowel
/*Write a function named hasVowel() which takes a string argument and returns true if the 
string has a vowel, returns false if the string doesn’t contain any vowel letter. 
NOTE: Vowels are = a, e, o, u, i. 
NOTE: Ignore upper/lower cases. 
 
Examples: 
hasVowel("")        -> false 
hasVowel("Javascript")     -> true 
hasVowel("Tech Global")     -> true 
hasVowel("1234")       -> false 
hasVowel("ABC")       -> true
*/
const hasVowel = (string) => string.toLowerCase().split('').filter(x => 'aeiou'.includes(x)).length > 0;

const hasVowel = (string) => string.toLowerCase().split('').some(x => 'aeuoi'.includes(x));

console.log(hasVowel(""))
console.log(hasVowel("Javascript"))
console.log(hasVowel("Tech Global"))
console.log(hasVowel("1234"))
console.log(hasVowel("ABC"));

//Start Vowel 
/*Write a function named as startVowel() which takes a string word as an argument and returns 
true if given string starts with a vowel, and false otherwise when invoked. 
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
 
Examples: 
startVowel("Hello")     -> false 
startVowel("Apple")    -> true 
startVowel("orange")   -> true 
startVowel("")     -> false 
startVowel("  ")     -> false 
startVowel("123")     -> false
*/

const startVowel = (string) => 'aeiouAEIOU'.includes(string[0]);
    
console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel("  "));
console.log(startVowel("123"));

//Average of Edges
/*Write a function named averageOfEdges() which takes three number arguments and will 
return average of min and max numbers. 
 
Examples: 
averageOfEdges(0, 0, 0)   -> 0 
averageOfEdges(0, 0, 6)   -> 3 
averageOfEdges(-2, -2, 10)   -> 4 
averageOfEdges(-3, 15, -3)   -> 6 
averageOfEdges(10, 13, 20)   -> 15
*/

const averageOfEdges = (n1, n2, n3) => {
    minNum = Math.min(n1, n2, n3);
    maxNum = Math.max(n1, n2, n3);
    return (minNum + maxNum) / 2;
}

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));


//Swap First and Last Four Characters 
/*Write a function named as swap4() which takes a string word as an argument and returns the 
string back with its first and last 4 characters swapped when invoked. 
NOTE: Return empty string if the given string does not have 8 or more characters. 
 
Examples: 
swap4("abc")       -> "" 
swap4("JavaScript")      -> "riptScJava" 
swap4("TechGlobal")     -> "obalGlTech" 
swap4("")         -> "" 
swap4("  ")       -> "" 
swap4("Apple")     -> ""
*/

const swap4 = (string) => {
    if(string.length < 8) return "";
    else return string.slice(- 4) + string.slice(4, - 4) + string.slice(0, 4);
}

console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4("  ")); 
console.log(swap4("Apple"));

//Count Positive Numbers 
/*Write a function named countPos() which takes an array of numbers as an argument and 
returns how many elements are positive when invoked.  
 
Examples: 
countPos([-45, 0, 0, 34, 5, 67])     -> 3 
countPos([-23, -4, 0, 2, 5, 90, 123])   -> 4 
countPos([0, -1, -2, -3])  -> 0
*/
const countPos = (arrayNum) => arrayNum.filter(x => x > 0).length;

const countPos = (arrayNum) => {
    let count = 0;
    for(const num of arrayNum) {
        if(num > 0) count++;
    }
    return count;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

//Find Even Numbers 
/*Write a function named as getEvens() which takes 2 number arguments and returns all the 
even numbers as an array stored from smallest even number to greatest even number when 
invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers. 
 
Examples: 
getEvens(2, 7)    -> [ 2, 4, 6 ] 
getEvens(17, 5)    -> [ 6, 8, 10, 12, 14, 16 ] 
getEvens(4, 4)    -> [ 4 ] 
getEvens(3, 3)    -> [ ]
*/

const getEvens = (num1, num2) => {
    arrayEven = [];
    min = Math.min(num1, num2);
    max = Math.max(num1, num2);
    
    for(let i = min; i <= max; i++){
        if(i % 2 === 0) arrayEven.push(i);
    }
    return arrayEven;
}

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));

//Find Numbers Divisible By 5 
/*Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the 
numbers divisible by 5 as an array stored from first found match to last found match when 
invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers. 
Examples: 
getMultipleOf5(3, 17)    -> [ 5, 10, 15] 
getMultipleOf5(23, 5)    -> [ 20, 15, 10, 5 ] 
getMultipleOf5(5, 5)      -> [ 5 ] 
getMultipleOf5(2, 4)      -> [ ]
*/

const getMultipleOf5 = (num1, num2) => {
    let arrayDivBy5 = [];
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
        for(let i = min; i <= max; i++) {
            if(i % 5 === 0) arrayDivBy5.push(i);
        }
        return (num1 > num2) ? arrayDivBy5.reverse() : arrayDivBy5;
    }


console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5)); 
console.log(getMultipleOf5(2, 4));

//Count Negative Numbers 
/*Write a function named countNeg() which takes an array of numbers as an argument and 
returns how many elements are negative when invoked.  
 
Examples: 
countNeg([-45, 0, 0, 34, 5, 67])     -> 1 
countNeg([-23, -4, 0, 2, 5, 90, 123])   -> 2 
countNeg([0, -1, -2, -3]) -> 3
*/

const countNeg = (array) => array.filter(x => x < 0).length;

const countNeg = (array) => {
    let count = 0;
    for(const num of array) {
        if(num < 0) count++;
    }
    return count;
}
const countNeg = (array) => array.reduce((count, x) => x < 0 ? count + 1 : count, 0);

console.log(countNeg([-45, 0, 0, 34, 5, 67])); 
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]));
console.log(countNeg([0, -1, -2, -3]));

//Count A 
/*Write a function named countA() which takes a string argument and returns how many A or a 
there are in the given string when invoked. 
NOTE: Ignore case sensitivity.  
 
Examples: 
countA("TechGlobal is a QA bootcamp")       -> 4 
countA("QA stands for Quality Assurance")     -> 5 
countA("Cypress")             -> 0 
*/

const countA = (string) => string.split('').filter(x => x.toLowerCase() === 'a').length;

const countA = (string) => string.split('').reduce((count, x) => (x.toLowerCase() === 'a') ? count + 1 : count, 0);

const countA = (string) => {
    let count = 0;
      for(const char of string) {
        if(char.toLowerCase() === 'a') count++;
      }
      return count;
}

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

//Count Words 
/*Write a function named countWords() which takes a string argument and returns the total 
count of words in the given string when invoked. 
NOTE: Be careful about the extra whitespaces before and after the string. 
 
Examples: 
countWords("     Javascript is fun       ")         -> 3 
countWords("Cypress is an UI automation tool.    ")     -> 6  
countWords("1 2 3 4") -> 4
*/

const countWords = (string) => string.trim().split(' ').length;

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4")); 

//Count 3 or Less 
/*Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked. 
 
Examples: 
count3OrLess("Hello")         -> 0 
count3OrLess("Hi John")         -> 1 
count3OrLess("JavaScript is fun")       -> 2 
count3OrLess("My name is John Doe")     -> 3 
count3OrLess("")           -> 0
*/

const count3OrLess = (string) => string.trim().split(' ').filter(word => word.length > 0 && word.length <= 3).length;

const count3OrLess = (string) => {
    return string.trim().split(' ').reduce((count, word) => word.length > 0 && word.length <= 3 ? count + 1: count, 0);
}

const count3OrLess = (string) => {
    const str = string.trim().split(' ');
    let count = 0;
    for(const word of str) {
        if(word.length > 0 && word.length <= 3) count++;
    }
    return count;
}

console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John")); 
console.log(count3OrLess("JavaScript is fun")); 
console.log(count3OrLess("My name is John Doe")); 
console.log(count3OrLess(""));

//Middle Number 
/*Write a function named middleInt() which takes three number arguments and 
return the middle number.  
 
Examples: 
middleInt(1, 2, 2)     -> 2 
middleInt(5, 5, 8)     -> 5 
middleInt(5, 3, 5)     -> 5 
middleInt(1, 1, 1)     -> 1 
middleInt(-1, 25, 10)   -> 10
*/

const middleInt = (num1, num2, num3) => [num1, num2, num3].sort((a, b) => a - b)[1];

const middleInt = (num1, num2, num3) => {
    if(num1 >= num2 && num1 <= num3) return num1;
    else if(num2 >= num1 && num2 <= num3) return num2;
    else return num3;
}

const middleInt = (num1, num2, num3) => {
    let array = [num1, num2, num3].sort((a, b) => a - b);
    return array[1];
  } 

console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1)); 
console.log(middleInt(-1, 25, 10));

//Count Vowels 
/*Write a function named as countVowels() which takes a string word as an argument and 
returns the count of the vowel letters when invoked. 
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i 
 
Examples: 
countVowels("Hello")       -> 2 
countVowels("JavaScript is fun")    -> 5 
countVowels("")         -> 0
*/

const countVowels = (string) => {
    let count = 0;
    for(const char of string) {
        if('AEOUIaeoui'.includes(char)) count++;
    }
    return count;
}

const countVowels = (string) => string.split('').filter(char => 'AEOUIaeoui'.includes(char)).length;

console.log(countVowels("Hello"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

//Count Consonants 
/*Write a function named as countConsonants() which takes a string word as an argument and 
returns the count of the consonant letters when invoked. 
NOTE: A letter that is not vowel is considered as a consonant letter. 
 
Examples: 
countConsonants("Hello")         -> 3 
countConsonants("Hello World")       -> 8 
countConsonants("JavaScript is fun")     -> 12 
countConsonants("")         -> 0 
*/

const countConsonants = (string) => string.split('').filter(char => !'AEOUIaeoui'.includes(char)).length;

const countConsonants = (string) => {
    let count = 0;
    for(const char of string) {
        if(!'AEOUIaeoui'.includes(char) ) count++; // && char !== " " => if not counting spaces
    }
    return count;
}

const countConsonants = (string) => string.split('').reduce((count, char) => !'AEOUIaeoui'.includes(char) ? count + 1 : count, 0);

console.log(countConsonants("Hello")); 
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

//Count Multiple Words 
/*Write a function named as countMultipleWords() which takes an array as an argument and 
returns the count of the elements that has multiple words when invoked. 
NOTE: Be careful about the extra whitespaces before and after the array element. 
 
Examples: 
countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ])     -> 1 
countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ])     -> 0 
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])     -> 4 
countMultipleWords([ ]) -> 0
*/

const countMultipleWords = (array) => array.filter(x => x.trim().includes(' ')).length;

const countMultipleWords = (array) => array.filter(element => element.trim().indexOf(' ') > 0).length;

const countMultipleWords = (array) => array.reduce((count, element) => element.trim().includes(' ') ? count + 1 : count, 0);

const countMultipleWords = (array) => {
    let count = 0;
    for(const element of array) {
        if(element.trim().indexOf(' ') > 0) count++; // element.trim().includes(' ');
    }
    return count;
}

console.log(countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ]));
console.log(countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ]));
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])); 
console.log(countMultipleWords([ ]));

//No Elements With A 
/*
Write a function named noA() which takes an array of strings as argument and will return a 
new array with all elements starting with "A" or "a" replaced with "###". 
 
Examples: 
noA(["javascript", "hello", "123", "xyz"])     ->  ["javascript", "hello", "123", "xyz"] 
noA(["apple", "123", "ABC", "javascript"])     ->  ["###", "123", "###", "javascript"] 
noA(["apple", "abc", "ABC", "Alex", "A"])     ->  ["###", "###", "###", "###", "###"]
*/

const noA = (array) => array.map(element => element.toLowerCase().startsWith('a') ? '###' : element); 

const noA = (array) => array.map(element => element[0].toLowerCase() === 'a' ? '###' : element); 

console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));

//No Elements Divisible By 3 and 5 
/*
Write a function named no3and5() which takes an array of integer numbers as argument and 
will return a new array with elements replaced by conditions below. 
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101 
 
Examples: 
no3and5([7, 4, 11, 23, 17])       -> [7, 4, 11, 23, 17] 
no3and5([3, 4, 5, 6])       -> [100, 4, 99, 100] 
no3and5([10, 11, 12, 13, 14, 15])     -> [99, 11, 100, 13, 14, 101] 
*/

const no3and5 = (array) => array.map(number => {
        if(number % 15 === 0) return 101;
        else if(number % 3 === 0) return 100;
        else if(number % 5 === 0) return 99;
        else return number;
    });

const no3and5 = array => {
    const newArr = [];
    for(const x of array){
      if(x % 3 === 0 && x % 5 === 0) newArr.push(101);
      else if(x % 3 === 0) newArr.push(100);
      else if(x % 5 === 0) newArr.push(99);
      else newArr.push(x);
    }
    return newArr;
  }

console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6])); 
console.log(no3and5([10, 11, 12, 13, 14, 15]));

//No Elements Equals 13 
/*Write a function named no13() which takes an array of numbers as argument and return a new 
array with all 13s replaced with 0s.  
 
Examples: 
no13([1, 2, 3 ,4])       -> [1, 2, 3 ,4]  
no13([13, 2, 3])       -> [0, 2, 3] 
no13([13, 13, 13 , 13, 13])     -> [0, 0, 0, 0, 0] 
no13([])         -> []

const no13 = (array) => array.map(number => number === 13 ? 0 : number);

const no13 = (array) => {
    const newArray = [];
    for(const number of array) {
        if(number === 13) newArray.push(0);
        else newArray.push(number);
    }
    return newArray;
}
*/

console.log(no13([1, 2, 3 ,4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13 , 13, 13]));
console.log(no13([]));

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
    for(const el of array) {
        if(!arrayNoDuplicates.includes(el)) arrayNoDuplicates.push(el);
    }
    return arrayNoDuplicates;
}

const removeDuplicates = (array) => array.reduce((result, el) => !(result.includes(el)) ? result.concat(el): result, []);

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])) 
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));

//No Digits 
/*Write a function named noDigit() which takes a string argument and returns a new string with 
all digits removed from the original string. 
 
Examples: 
noDigit("")           -> "" 
noDigit("Javascript")       -> "Javascript" 
noDigit("123Hello")         -> "Hello" 
noDigit("123Hello World149")     -> "Hello World” 
noDigit("123Tech456Global149")     -> "TechGlobal" 
*/

const noDigit = (string) => string.split('').filter(x => !(x >= '0' && x <= '9') ).join('');

const noDigit = (string) => string.split('').filter(x => x < '0' || x > '9').join('');

console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));

//No Vowel 
/*Write a function named noVowel() which takes a string argument and returns a new string 
with all vowels removed from the original string. 
 
Examples: 
noVowel("TechGlobal")   -> "TchGlbl" 
noVowel("AEOxyz")   -> "xyz" 
noVowel("Javascript")   -> "Jvscrpt" 
noVowel("")   -> "" 
noVowel("125$")   -> "125$"
*/

const noVowel = (string) => string.split('').filter(x => !'aeoui'.includes(x.toLowerCase())).join('');

const noVowel = string => string.split('').filter(x => !'AEIOUaeiou'.includes(x)).join('');

console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz")); 
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));

//Sum Of Digits 
/*Write a function named sumOfDigits() which takes a string argument and returns sum of all 
digits from the original string.  
 
Examples: 
sumOfDigits("Javascript")       -> 0 
sumOfDigits("John’s age is 29")     -> 11 
sumOfDigits("$125.0")       -> 8 
sumOfDigits("")         -> 0
*/

const sumOfDigits = (string) => string.split('').reduce((sum, x) => x >= '0' && x <= '9' ? sum + Number(x) : sum, 0);

/*const sumOfDigits = string => {
    let sum = 0;
    const array = string.split('');
    for(const x of array){
        if(x >= '0' && x <= '9') sum += Number(x);
    }
    return sum;
}
*/

console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("John's age is 29")); 
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));