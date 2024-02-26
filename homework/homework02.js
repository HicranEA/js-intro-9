// Task-1

/*
Requirement:
Convert given Strings below to number data types and 
find their sum, product, division, subtraction, remainder and exponentiation.

let str1 = "5", str2 = "2";

Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25
*/

let str1 = "5", str2 = "2";

let sum = Number(str1) + Number(str2);
let product = Number(str1) * Number(str2);
let div = Number(str1) / Number(str2);
let sub = Number(str1) - Number(str2);
let remainder = Number(str1) % Number(str2);
let exp = Number(str1) ** Number(str2);

console.log(`The sum of ${str1} and ${str2} is = ${sum}`);
console.log(`The product of ${str1} and ${str2} is = ${product}`);
console.log(`The divison of ${str1} and ${str2} is = ${div}`);
console.log(`The subtraction of ${str1} and ${str2} is = ${sub}`);
console.log(`The remainder of ${str1} and ${str2} is = ${remainder}`);
console.log(`The exponentiation of ${str1} and ${str2} is = ${exp}`);

//Task-2

/*
Requirement:
Convert given Strings below to number data types and 
find the greatest and smallest values and 
find the average and absolute difference of them.

let s1 = "200", s2 = "-50";

Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250
*/

let s1 = "200", s2 = "-50";

let max = Math.max(Number(s1), Number(s2));
let min = Math.min(Number(s1), Number(s2));
let avg = Math.min((Number(s1) + Number(s2)) / 2);
let absDif = Math.abs(Number(s1) - Number(s2));

console.log('The greatest value is =', max);
console.log('The smallest value is =', min);
console.log('The average is =', avg);
console.log('The absolute diffrence is =', absDif);

//Task-3

/*
Requirement:
Write a program that generates 2 random numbers between 1 and 50 (both 1 and 50 are included). 
Then, find the absolute difference of these numbers.

Test Data:5, 27

Expected Output:
The absolute difference between numbers is = 22
*/

//Math.floor(Math.random() * (b - a + 1)) + a

let r1 = Math.floor(Math.random() * 50) + 1;
let r2 = Math.floor(Math.random() * 50) + 1;

console.log(r1, r2);

console.log(`The absolute difference between numbers is = ${Math.abs(r1 - r2)}`);

//Task-4

/*
Requirement:
Write a program that generates 5 random numbers between 1 and 50 (both 1 and 50 are included). 
Then, find the max and min of these numbers.
 
Test Data:
3, 15, 45, 20, 25

Expected Output:
The max value = 45
The min value = 3
*/

let random1 = Math.floor(Math.random() * 50) + 1;
let random2 = Math.floor(Math.random() * 50) + 1;
let random3 = Math.floor(Math.random() * 50) + 1;
let random4 = Math.floor(Math.random() * 50) + 1;
let random5 = Math.floor(Math.random() * 50) + 1;

let maxNum = Math.max(random1, random2, random3, random4, random5);
let minNum = Math.min(random1, random2, random3, random4, random5);

console.log (random1, random2, random3, random4, random5);

console.log('The max value =', maxNum);
console.log('The min value =', minNum);

//Task-5

/*
Requirement:
Write a program that generates 3 random numbers between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
Test Data:
55, 67, 90

Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212
*/

let rdNum1 = Math.floor(Math.random() * 51) + 50;
let rdNum2 = Math.floor(Math.random() * 51) + 50;
let rdNum3 = Math.floor(Math.random() * 51) + 50;

let sumOfRds= rdNum1 + rdNum2 + rdNum3;

console.log('The number 1 =', rdNum1);
console.log('The number 2 =', rdNum2);
console.log('The number 3 =', rdNum3);

console.log('The sum of numbers is =', sumOfRds);

//Task-6

/*
Requirement:
Write a program that generates 3 random numbers between 1 and 100 (1 and 100 are included) and 
find if all the numbers are more than 25.

Print true if all numbers are greater than 25.

Print false if any of the number is less than or equals 
25.
*/

let rand1 = Math.floor(Math.random() * 100) + 1;
let rand2 = Math.floor(Math.random() * 100) + 1;
let rand3 = Math.floor(Math.random() * 100) + 1;

console.log (rand1, rand2, rand3);

console.log(Math.min(rand1, rand2, rand3) > 25);

//Task-7

/*
Requirement:
Assume you are given a name let name = "David"; 
1. Print out the length of the name
2. Find the first character in the name and print it
3. Find the last character in the name and print it
4. Find the first 3 characters in the name and print 
them
5. Find the last 3 characters in the name and print 
them

Expected Output:
The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/

let name = 'David';

console.log('The length of the name is =', name.length);
console.log('The first character in the name is =', name[0]);
console.log('The last character in the name is =', name.slice(-1));
console.log('The first 3 characters in the name are =', name.slice(0, 3));
console.log('The last 3 characters in the name are =', name.slice(-3));


