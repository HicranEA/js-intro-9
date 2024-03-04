// Task-1
/*
Requirement:
Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 (both inclusive).
*/

for(let i = 1; i <= 14; i++) {
    console.log(i * 7);
}

// Task-2
/*
Requirement:
Write a program that outputs all the numbers that are divisible by both 2 and 3 starting from 1 to 50 (both inclusive).
*/

for(let i = 1; i <= 8; i++) {
    console.log(i * 6);
}

// Task-3
/*Requirement:
Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive).
*/

for(let i = 100; i >= 50; i -= 5) {
    console.log(i);
}

// Task-4
/*
Requirement:
Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!
*/

for(let i = 0; i <= 7; i++) {
    console.log(`The square output of ${i} is = ${i * i}`);
}

// Task-5
/*
Requirement:
Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
NOTE: Use loop!!!
*/

let sum = 0;
for(let i = 1; i <= 10; i++) {
    sum += i;
   }

console.log(sum);

//Task - 6
/*Requirement:
Write a program generates a random number between 1 and 10 (both inclusive).
And find the factorial of the number.
Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1.
*/

const {generateRandomNumber} = require('../utils/MathHelper.js');

let rdNum = generateRandomNumber(1, 10);
let factNum = 1;

for (let i = rdNum; i >=1; i--){
    factNum *= i;
}

console.log(`The Factorial of ${rdNum} is ${factNum}`);

// Task - 7
/*Requirement:
Write a program generates a random number between 1 and 100 (both inclusive).
Keep generating a new number till you get a number that is divisible by 5.
The program should also count how many attempts it takes to generate such a number.
Eventually, print the random number divisible by 5 with the number of attempts as below.
Expected Output:
The random number is {randomNumber} and it took {attempts} attempt/s to generate it.
*/

const {generateRandomNumber} = require('../utils/MathHelper.js');

let count = 0;
let rNum; 

for( ; ; ) {
    rNum = generateRandomNumber(1, 100);
    count++;
    if(rNum % 5 === 0) break;
}

console.log(`The random number is ${rNum} and it took ${count} attempt/s to generate it`); 

// Task-8
/*Requirement:
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania
THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically
*/

const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(countries);
console.log(countries.sort());

// Task-9
/*Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 
THEN:
-Output the entire array
-Then, check if the array has Pluto element
if it has Pluto, then output true
if it does not have Pluto, output false
*/

const toonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(toonDogs);
console.log(toonDogs.includes('Pluto'));

// Task - 10
/*Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael
THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
if it has both, then output true
if it does not have both, output false
*/

const toonCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

console.log(toonCats.sort());
console.log(toonCats.includes('Garfield') && toonCats.includes('Felix'));

// Task - 11
/*Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75
THEN:
-Output the entire array
-Ouput each element
*/

const numArr = [10.5, 20.75, 70, 80, 15.75];

console.log(numArr);
 for(let i = 0; i < numArr.length; i++){
    console.log(numArr.at(i));
 }

 // Task - 12
 /* Requirement:
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler
THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', 
ignoring cases.
-Output how many elements has 'book' or 'pen' partial 
strings, ignoring cases.
*/

const objectsArr = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
console.log(objectsArr);

let sumStartBP = 0;
for(let i = 0; i < objectsArr.length; i++){
    if(objectsArr[i][0].toLowerCase() === 'b' || objectsArr[i][0].toLowerCase() === 'p')
    sumStartBP++;
    } 

console.log(`Elements starting with 'B' or 'P' = ${sumStartBP}`);

let sumBookPen = 0;
for(let i = 0; i < objectsArr.length; i++){
    if(objectsArr[i].toLowerCase().includes('book') || objectsArr[i].toLowerCase().includes('pen'))
    sumBookPen++;
}
   
console.log(`Elements having 'book' or 'pen' = ${sumBookPen}`);

// Task - 13
/*Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78
THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10
*/

const numbersArr = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(numbersArr);

let numLessTen = 0;
let numMoreTen = 0;
let numTen = 0;

for(let i = 0; i < numbersArr.length; i++){
    if(numbersArr[i] > 10) numMoreTen++;
    else if (numbersArr[i] < 10) numLessTen++;
    else numTen++;

}

console.log(`Elements that are more than 10 = ${numMoreTen}`);
console.log(`Elements that are less than 10 = ${numLessTen}`);
console.log(`Elements that are 10 = ${numTen}`);

//Task - 14
/*Requirement:
-Create 2 arrays that stores numbers below.
First array->  [ 5, 8, 13, 1, 2 ]
Second array ->  [ 9, 3, 67, 1, 0 ]
THEN:
-Output both arrays
–Then, create a new array that will take the greatest value of same index from first 2 arrays and output the third array as well.
Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]
*/

const numsArr1 = [ 5, 8, 13, 1, 2 ];
const numsArr2 = [ 9, 3, 67, 1, 0 ];
const numArr3 = [];

console.log(numsArr1);
console.log(numsArr2);

for(let i = 0; i < 5; i++){
    if (numsArr1[i] >= numsArr2[i]) numArr3.push(numsArr1[i]);
    else numArr3.push(numsArr2[i]);
}

console.log(numArr3);

//Task - 15
/*Requirement:
Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. For two 
elements to be considered as duplicated, value and data types of the elements must be same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])  -> -1
*/

function firstDuplicate(arr1){
    for(let i = 0; i < arr1.length; i++)
       if(arr1.indexOf(arr1[i]) !== arr1.lastIndexOf(arr1[i])) return arr1[i];
       return -1;

}     

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]));
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]));
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]));
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]));
console.log(firstDuplicate([ 1, 2, 3 ]));
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar']));

// Task - 16
/*Requirement:
Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data types of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> []
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -> []
*/

function getDuplicates(arr2){
    const arr3 = [];
    for(let i = 0; i < arr2.length; i++){
    if(arr2.indexOf(arr2[i]) !== arr2.lastIndexOf(arr2[i])){
        if (!arr3.includes(arr2[i])) arr3.push(arr2[i]);
        }
    }
    return arr3;
}

   console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));
   console.log(getDuplicates([ 1, 2, 5, 0, 7 ]));
   console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]));
   console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]));

// Task - 17
/*Requirement:
Write a function named as reverseStringWords() which takes a string as an argument and returns string back 
with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words 
in the given string.
Examples:
reverseStringWords("Hello World")  -> "olleH dlroW"
reverseStringWords("I like JavaScript")  -> "I ekil tpircSavaJ"
reverseStringWords("Hello")  -> "olleH"
reverseStringWords("")  -> ""
reverseStringWords("    ")  -> ""
*/

function reverseStringWords(str){
    const strArray = str.split(' ');
    let reversedStr = "";
    for (let i = 0; i < strArray.length; i++){
        if (i > 0 && i < strArray.length) reversedStr = reversedStr.concat(" ");
        for (let j = strArray[i].length - 1; j >= 0; j--){
        reversedStr =  (reversedStr.concat(strArray[i][j]));
        } 
    }
    return reversedStr;   
}

console.log(reverseStringWords("Hello World"));
console.log(reverseStringWords("I like JavaScript")); 
console.log(reverseStringWords("Hello"));
console.log(reverseStringWords(""));
console.log(reverseStringWords("    "));

// Task - 18
/*Requirement:
Write a function named as getEvens() which takes 2 number arguments and returns all the even numbers as an array 
stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the 
range of given 2 numbers. 
Assume you will not be given negative numbers.
Examples:
getEvens(2, 7) -> [ 2, 4, 6 ]
getEvens(17, 5) -> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4) -> [ 4 ]
getEvens(3, 3) -> []
*/

function getEvens(num1, num2){
    const arrEven = [];
    let min = Math.min(num1, num2)
    let max = Math.max(num1, num2)
    for(let i = min; i <= max; i++){
        if(i % 2 === 0) arrEven.push(i);
    }
    return arrEven;
}

console.log(getEvens(2, 7));
console.log(getEvens(17, 5)); 
console.log(getEvens(4, 4)); 
console.log(getEvens(3, 3)); 

//Task - 19
/*Requirement:
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers divisible by 5 
as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 
in the range of given 2 numbers. 
Assume you will not be given negative numbers.
Examples:
getMultipleOf5(3, 17) -> [ 5, 10, 15]
getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5) -> [ 5 ]
getMultipleOf5(2, 4) -> [ ]
*/

function getMultipleOf5(num1, num2){
    const arrDiv5 = [];
    if(num1 <= num2){
       for(let i = num1; i <= num2; i++){ 
            if(i % 5 === 0) arrDiv5.push(i);
             }
    }     
    else if(num1 > num2){
        for(let i = num1; i >= num2; i--){
            if(i % 5 === 0) arrDiv5.push(i);
            }
    }           
    return arrDiv5;
}

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));

//Task - 20
/*Requirement:
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed 
with below requirements when invoked.
•You need to find all the numbers within the range of given 2 numbers (both inclusive) and 
store them in a string from smallest to greatest number with a ' | ' separator for each number.
•You will need to convert numbers divisible by 3 to 'Fizz'
•You will need to convert numbers divisible by 5 to 'Buzz'
•You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
•The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
Examples:fizzBuzz(13, 18) -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5) -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5) -> "Buzz"
fizzBuzz(9, 6) -> "Fizz | 7 | 8 | Fizz"
*/

function fizzBuzz(num1, num2){
    min = Math.min(num1, num2);
    max = Math.max(num1, num2);
    const strArray = [];
    for(let i = min; i <= max; i++){
        if(i % 15 === 0)   strArray.push("FizzBuzz");
        else if(i % 5 === 0)  strArray.push("Buzz");
        else if (i % 3 === 0)  strArray.push("Fizz");
        else strArray.push(i);
    }
    let str = strArray.join(' | ');
   return str;
}

console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));