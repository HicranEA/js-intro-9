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

const replaceFirstLast = (string) => {
    let str = string.trim();
    if(str.length >= 2) return str[str.length - 1] + str.slice(1, - 1) + str[0];
    else return "";
}

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

const removeExtraSpaces = (str) => {
    let strArr = str.trim().split(' ');
    strExtraSpacesRemoved = "";
    for(const word of strArr) {
        if(word.length > 0) strExtraSpacesRemoved += `${word} `;
    }
    return strExtraSpacesRemoved;
}

console.log(removeExtraSpaces("Hello"));
console.log(removeExtraSpaces("    Hello    World  "));
console.log(removeExtraSpaces("   JavaScript is        fun")); 
console.log(removeExtraSpaces(""));

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

const firstDuplicate = (array) => {
    for(i = 0; i < array.length; i++){
        for(j = i + 1; j < array.length; j++){
            if(array[i] === array[j]) return array[i];
        }
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

const getDuplicates = (array) => {
   const arrayOfDuplicates = [];
   for(const el of array) {
    if(array.indexOf(el) !== array.lastIndexOf(el) && !arrayOfDuplicates.includes(el)) arrayOfDuplicates.push(el);
   }
   return arrayOfDuplicates;
}

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]));
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]));
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]));

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

const reverseStringWords = (string) => {
    let strArray = string.trim().split(' ');
    for(let i= 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].split('').reverse().join('');
    }
    return strArray.join(' ');
}

console.log(reverseStringWords("Hello World")); 
console.log(reverseStringWords("I like JavaScript"));
console.log(reverseStringWords("Hello")); 
console.log(reverseStringWords(""));
console.log(reverseStringWords(" "));

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

const isPalindrome = (string) => {
    let revString = string.trim().split('').reverse().join('');
    return string.toLowerCase() === revString.toLowerCase();
  }
 
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
    
    for(let i = 5; i < number; i += 2) {
        if(number % i === 0) return false;
    }
    return true;
}

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

const sumOfDigits = string => {
    let sum = 0;
    const array = string.split('');
    for(const x of array){
        if(x >= '0' && x <= '9') sum += Number(x);
    }
    return sum;
}

console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("John's age is 29")); 
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));

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


