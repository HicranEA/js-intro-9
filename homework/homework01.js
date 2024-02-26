//Task-1

console.log('I started to practice "JavaScript" today, and I like it.');
console.log('The secret of getting ahead is getting started.');
console.log(`"Don't limit yourself."`);
console.log('Invest in your dreams. Grind now. Shine later.');
console.log(`It's not the load that breaks you down, it's the way you carry it.`);
console.log('The hard days are what make you stronger.');
console.log('You can waste your lives drawing lines. Or you can live your life crossing them.');
 
//Task-2

console.log('\tJavaScript is a high-level programming language\nprimarily used to build web applications. It is not limited\nto the web; it can also be used for the backend\ndevelopment with technologies like Node.js.\n\n\n\tIt is open source and has a huge community support,\nwhich means there are plenty of resources and support\navailable for learning. It uses a syntax like other\nprogramming languages and easy to learn.');

/*
console.log(`   JavaScript is a high-level programming language
primarily used to build web applications. It is not limited
to the web; it can also be used for the backend
development with technologies like Node.js.


	It is open source and has a huge community support,
which means there are plenty of resources and support
available for learning. It uses a syntax like other
programming languages and easy to learn.`);
*/

//Task-3

let myAge = 50, myFavoriteNumber = 21, myHeight = 5.3, myWeight = 115, myFavoriteLetter = 'A';

console.log(myAge);
console.log(myFavoriteNumber);
console.log(myHeight);
console.log(myWeight);
console.log(myFavoriteLetter);

//Task-4

let num1, num2;
num1 = 25;
num2 = 35;

console.log(`The sum of the numbers = ${num1 + num2}`); 					// The sum of the numbers = 60

//Task-5

let n1, n2;
n1 = 5;
n2 = 7;

console.log (`The product of the numbers = ${n1 * n2}`); 						// The product of the numbers = 35

//Task-6

let number1, number2;
number1 = 24;
number2 = 10;

console.log(`The sum of the numbers is = ${number1 + number2}`);			// The sum of the numbers is = 34
console.log(`The product of the numbers is = ${number1 * number2}`);		// The product of the numbers is = 240
console.log(`The subtraction of the numbers is = ${number1 - number2}`);	// The subtraction of the numbers is = 14
console.log(`The division of the numbers is = ${number1 / number2}`);		// The division of the numbers is = 2.4
console.log(`The remainder of the numbers is = ${number1 % number2}`);		// The remainder of the numbers is = 4

//Task-7

let i1, i2;
i1 = 7;
i2 = 11;

console.log(`The average of the numbers is: ${(i1 + i2) / 2}`); 				//The average of the numbers is: 9

//Task-8

let a1 = 6, a2 = 10, a3 = 12, a4 = 15, a5 = 17;

console.log(`The average of the numbers is: ${(a1 + a2 + a3 + a4 +a5) / 5}`); 	//The average of the numbers is: 12

//Task-9

let b1 = 5, b2 = 6, b3 = 10;

console.log(`The ${b1} multipled with ${b1} is = ${b1 * b1}`); 				//The 5 multiplied with 5 is = 25
console.log(`The ${b2} multipled with ${b2} is = ${b2 *  b2}`); 			//The 6 multiplied with 6 is = 36
console.log(`The ${b3} multipled with ${b3} is = ${b3 * b3}`);				//The 10 multiplied with 10 is = 100

//Task-10

let side = 7;

console.log(`The perimeter of the square = ${4 * side}`);					//The perimeter of the square = 28
console.log(`The area of the square = ${side * side}`);						//The area of the square = 49

//Task-11

let favBook = 'JS Algorithms & Data Structures';
let favColor = 'Blue';
let favNumber = 7;


/*Expected output: 
The favorite book is JS Algorithms & Data Structures 
The favorite color is  Blue
The favorite number is  7
*/

console.log(`The favorite book is ${favBook}
The favorite color is  ${favColor}
The favorite number is  ${favNumber}`);


//Task-12

let firstName = 'John';
let lastName = 'Doe';
let age = 45;
let emailAddress = 'johndoe@gmail.com';
let phoneNumber = '(123) 123 1234';
let address = '123 St Chicago IL 12345';

/*Expected output;

	User who joined this program is John Doe. John’s age is 45. 
John’s email address is johndoe@gmail.com, phone number is
(123) 123 1234, and address is 123 St Chicago IL 12345.
*/

console.log(`	User who joined this program is ${firstName} ${lastName}. ${firstName}'s age is ${age}. 
${firstName}'s email address is ${emailAddress}, phone number is 
${phoneNumber}, and address is ${address}.`);