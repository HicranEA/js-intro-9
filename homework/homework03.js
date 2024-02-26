// Task-1
/*
Requirement:
Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)
Print true if the average of the random numbers is greater or equals 50. 
Print false if the average of the random numbers is less than 50.
Test data 1:
20, 70, 25
Expected Output 1: 
false

Test data 2:
65, 80, 90
Expected Output 2: 
true
*/
console.log('\n--------------------------------\n');

let r1 = Math.floor(Math.random() * 100) + 1;
let r2 = Math.floor(Math.random() * 100) + 1;
let r3 = Math.floor(Math.random() * 100) + 1;

console.log (r1, r2, r3);

console.log(((r1 + r2 + r3) / 3) >= 50);

//Task - 2

/*Requirement:
Write a  program that generates 3 random numbers between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print “DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”

Test data 1:
3, 3, 3
Expected Output 1: 
TRIPLE MATCH

Test data 2:
1, 3, 3
Expected Output 2: 
DOUBLE MATCH

Test data 3:
1, 2, 3
Expected Output 3: 
NO MATCH

Test data 4:
1, 1, 2
Expected Output 4: 
DOUBLE MATCH
*/
console.log('\n--------------------------------\n');

let rNum1 = Math.floor(Math.random() * 3) + 1;
let rNum2 = Math.floor(Math.random() * 3) + 1;
let rNum3 = Math.floor(Math.random() * 3) + 1;

console.log(rNum1, rNum2, rNum3);

if (rNum1 === rNum2 && rNum1 === rNum3){
   console.log("TRIPLE MATCH"); 
} 
else if (rNum1 === rNum2 || rNum1 === rNum3 || rNum2 === rNum3){
    console.log("DOUBLE MATCH");
}
else console.log("NO MATCH");

//Task - 3

/*
Requirement:
Write a function named as hasA() which takes a string word as an argument and returns true if given string 
has a character "a" or "A", and false otherwise when invoked.
NOTE: Assume you will not be given an empty word.

Examples:
hasA("Tech")  -> false
hasA("Global")  -> true
hasA("")  -> false
hasA("Apple")  -> true
*/
console.log('\n--------------------------------\n');

function hasA(string){
    return string.includes('A') || string.includes('a');
}

console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));

//Task - 4

/*
Requirement:
Write a function named as doubleOrTripleWord() which takes a string word as an argument and returns 
the given word back tripled if the string length is even or doubled if the string length is odd when invoked.

Examples:
doubleOrTripleWord("Tech")  -> "TechTechTech"
doubleOrTripleWord("Apple")  -> "AppleApple”
doubleOrTripleWord("")  -> ""
doubleOrTripleWord(" ")  -> " "
doubleOrTripleWord("1")  -> "11"
doubleOrTripleWord("22")  -> "222222"
*/
console.log('\n--------------------------------\n');

function doubleOrTripleWord(string){
    if (string.length % 2 === 0) return string.repeat(3);
    else return string.repeat(2);
}
console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple")); 
console.log(doubleOrTripleWord("")); 
console.log(doubleOrTripleWord(" "));  
console.log(doubleOrTripleWord("1")); 
console.log(doubleOrTripleWord("22"));

// Task - 5
/*
Requirement:
Write a function named as firstWord() which takes a string word as an argument and returns the first word 
from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.

Examples:
firstWord("Hello World")  -> "Hello"
firstWord("I like JavaScript")  -> "I"
firstWord("Hello")  -> "Hello"
firstWord("")  -> ""
firstWord("    ")  -> ""
*/
console.log('\n--------------------------------\n');

function firstWord(string){
    if (string.indexOf(" ") > 0) return string.slice(0, string.indexOf(" "));
    else return string;
    }

console.log(firstWord("Hello World"));
console.log(firstWord("I like JavaScript"));
console.log(firstWord("Hello"));
console.log(firstWord(""));
console.log(firstWord("    "));

// Task - 6
/*
Requirement:
Write a function named as lastWord() which takes a string word as an argument and returns the last word 
from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.

Examples:
lastWord("Hello World")  -> "World"
lastWord("I like JavaScript")  -> "JavaScript”
lastWord("Hello")  -> "Hello"
lastWord("")  -> ""
lastWord("    ")  -> ""
*/

console.log('\n--------------------------------\n');

function lastWord(string){
    return string.slice(string.lastIndexOf(" ") + 1);
}

console.log(lastWord("Hello World"));
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));
console.log(lastWord(""));
console.log(lastWord("    "));

// Task - 7
/*
Requirement: 
Write a function named as firstlastWord() which takes a string word as an argument and returns the first and 
last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.

Examples:
firstLastWord("Hello World")  -> "HelloWorld"
firstLastWord("I like JavaScript")  -> "IJavaScript”
firstLastWord("Hello")  -> "HelloHello"
firstLastWord("")  -> ""
firstLastWord("    ")  -> ""
*/
console.log('\n--------------------------------\n');

function firstLastWord(string){
   if (string.indexOf(" ") > 0) return`${string.slice(0, string.indexOf(" "))}${string.slice(string.lastIndexOf(" ") + 1)}`;
   else return string + string;
}

console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello"));
console.log(firstLastWord(""));
console.log(firstLastWord("    "));

// Task - 8
/*
Requirement:
Write a function named as startVowel() which takes a string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Examples:
startVowel("Hello")  -> false
startVowel("Apple") -> true
startVowel("orange")  -> true
startVowel("")  -> false
startVowel("    ")  -> false
startVowel("123")  -> false
*/
console.log('\n--------------------------------\n');

function startVowel(string){
    let str = string.toLowerCase();
    return str.charAt(0) === 'a' || str.charAt(0) === 'e' || str.charAt(0) === 'i' ||str.charAt(0) === 'o' || str.charAt(0) === 'u';
}

console.log(startVowel("nine"));
console.log(startVowel("English"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel("    "));
console.log(startVowel("123"));

// Task - 9
/*
Requirement: 
Write a function named as swap4() which takes a string word as an argument and returns the string back 
with its first and last 4 characters swapped when invoked.
NOTE: Return empty string if the given string does not have 8 or more characters.

Examples:
swap4("abc")  -> ""
swap4("JavaScript")  -> "riptScJava"
swap4("TechGlobal")  -> "obalGlTech"
swap4("")  -> ""
swap4("    ")  -> ""
swap4("Apple")  -> ""
*/
console.log('\n--------------------------------\n');

function swap4(string){
    if (string.length >= 8) return string.slice(-4) + string.slice(4, -4) + string.slice (0, 4);
    else return "";
}

console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4("    "));
console.log(swap4("Apple"));

// Task - 10
/*
Write a function named as swapFirstLastWord()  which takes a string word as an argument and returns 
the string back with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.

Examples:
swapFirstLastWord("Hello World")  -> "WorldHello "
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar")  -> "bar bar foo foo"
swapFirstLastWord("")  -> ""
swapFirstLastWord("    ")  -> ""
swapFirstLastWord("Hello")  -> ""
swapFirstLastWord("Hello   ")  -> ""
*/
console.log('\n--------------------------------\n');

function swapFirstLastWord(string){
    let newString = string.trim();
    let firstWrd = newString.slice(0, newString.indexOf(" "));
    let lastWrd = newString.slice(newString.lastIndexOf(" ") + 1);
    let middleWrd = newString.slice(newString.indexOf(" "), newString.lastIndexOf(" ") + 1);
    if (newString.indexOf(" ") > 0) return lastWrd + middleWrd + firstWrd; 
    else return "";
}

console.log(swapFirstLastWord("Hello World"));  
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord("    "));  
console.log(swapFirstLastWord("Hello"));  
console.log(swapFirstLastWord("Hello    "));

