let var1 = Infinity;
let var2 = -Infinity;
let var3 = 3 / 0; 
let var4 = -5 / 0; 
let var5 = -Infinity * Infinity;
let var6 = -Infinity + Infinity; 
let var7 = -Infinity / Infinity;

console.log(var1); // Infinity
console.log(var2); // -Infinity
console.log(var3); // Infinity
console.log(var4); // -Infinity
console.log(var5); // -Infinity
console.log(var6); // NaN
console.log(var7); // NaN

console.log(0 / 0); // NaN

console.log(typeof NaN); // number
console.log(typeof Infinity); // number
console.log(typeof -Infinity); // number

console.log(typeof Infinity);

console.log(0 / 0);                         //NaN
console.log(Infinity / 0);                  //Infinity
console.log(Infinity / 5);                  //Infinity
console.log(5 / 0);                         //Infinity
console.log(0 / Infinity);                  //0
console.log(0 / 5);                         //0
console.log(5 / Infinity);                  //0
console.log(-Infinity - Infinity);          //-Infinity

let text = "  Hello World  ";
console.log (text.endsWith());


// Mock Interview Practice

console.log( false === 0); // false
console.log( false == 0); // true
console.log("   " == true); //false

console.log((3 == "3" || 2 + 5 === "7") && !(5 < 10 || !false));
console.log((!true && !false) || 5 * 2 === true * 10);
console.log("3" * "5" >= 15 && true == 1 && " " == false && "" === 0);
console.log(!(5 ** (10 / 5) === 25 || 5 === "5" || 3 >= 5));
console.log(!(2 + 2 === 8 / 2 && !false && 10 % 2 === 0) || 25 % 4 == "1");
console.log((true && false) || (10 + 5 === "15" && "apple" !== "orange"));
console.log(!(10 <= 20 && 3 * 2 === "6") && (5 + 5 !== 11 || false));
console.log(("Hello" + "World" === "HelloWorld" || 5 > 3) && (true && !false));
console.log((4 >= 3 && 5 * 2 === "10") || !(7 !== "7" && "dog" === "cat"));
console.log((20 % 6 !== 0 && "apple" === "orange") || !(2 + 2 === 4 && true));
console.log((!true && !false) && ("car" === "vehicle" || 3 ** 2 <= 10));
console.log((5 + 3 >= "8" && 2 ** 3 === "8") || !(false || true));
console.log((10 / 2 === 5 || "hello" + "world" === "helloworld") && (5 === "5" || true));
console.log(("hello" !== "world" && "apple" + "pie" === "applepie") || (5 + 5 !== "10" && 7 % 2 === 0));
console.log((5 * 2 === 9 || true) && !(10 - 5 !== 5 && 10 % 3 === 1));


/*let random = Math.floor(Math.random() * 10) + 1;
console.log(random);
console.log(random % 2 === 0);
*/

/* let random = Math.floor(Math.random() * 10) + 1;
console.log(random);
console.log(random % 2 !== 0);
*/

/*let random = Math.floor(Math.random() * 11) - 5;
console.log(random);
console.log(random > 0);
*/

/*
let random = Math.floor(Math.random() * 11) - 5;
console.log(random);
console.log(random > 0);
*/

/*let random = Math.floor(Math.random() * 50) + 1;
console.log(random);
console.log(random % 5 === 0);
*/ 

/*
let random = Math.floor(Math.random() * 50) + 1;
console.log(random);
console.log(random % 7 === 0);
*/

/*
let random1 = Math.floor(Math.random() * 10) + 1;
let random2 = Math.floor(Math.random() * 10) + 1;
console.log(random1, random2);
console.log(random1 + random2);
*/

/*
let random1 = Math.floor(Math.random() * 10) + 1;
let random2 = Math.floor(Math.random() * 10) + 1;
console.log(random1, random2);
console.log(Math.abs(random1 - random2));
*/

/*
let random1 = Math.floor(Math.random() * 10) + 1;
let random2 = Math.floor(Math.random() * 10) + 1;

console.log(random1, random2);
console.log(random1 * random2);
*/

/*
let random = Math.floor(Math.random() * 10) +1;
console.log(random);
console.log(Math.pow(random, 2));
console.log(random ** 2);
*/

/*
let random = Math.floor(Math.random()  * 10) + 1;
console.log(random);
console.log(Math.pow(random, 3));
console.log(random ** 3);
*/

/*
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);
console.log(random * 1.6);
*/

/*
let random = Math.floor(Math.random() * 100) + 1;
console.log(random);
console.log(random * 2.2);
console.log((random * 2.2).toFixed(1));
*/

/*
let random1 = Math.floor(Math.random() * 3) + 1;
let random2 = Math.floor(Math.random() * 3) + 1;

console.log(random1, random2);
console.log(random1 === random2);
*/

/*
let age = Math.floor(Math.random() * 100) + 1;
console.log(age);
console.log(age >= 16);
*/

/*
let random1 = Math.floor(Math.random() * 10) + 1;
let random2 = Math.floor(Math.random() * 10) + 1;

console.log(random1, random2);
console.log(Math.max(random1, random2));
*/

/*
let random1 = Math.floor(Math.random() * 10) + 1;
let random2 = Math.floor(Math.random() * 10) + 1;
let random3 = Math.floor(Math.random() * 10) + 1;

console.log(random1, random2, random3);
console.log(Math.max(random1, random2, random3));
*/

/*
let random1 = Math.floor(Math.random() * 10) + 1;
let random2 = Math.floor(Math.random() * 10) + 1;

console.log(random1, random2);
console.log(Math.min(random1, random2));
*/

/*
let random1 = Math.floor(Math.random() * 10) + 1;
let random2 = Math.floor(Math.random() * 10) + 1;
let random3 = Math.floor(Math.random() * 10) + 1;

console.log(random1, random2, random3);
console.log(Math.min(random1, random2, random3));
*/

/*
let random1 = Math.floor(Math.random() * 10) + 1;
let random2 = Math.floor(Math.random() * 10) + 1;
let random3 = Math.floor(Math.random() * 10) + 1;

console.log(random1, random2, random3);
console.log((random1 + random2 + random3) / 3);
*/

/*
let number = Math.floor(Math.random() * 100) + 1;
console.log(number);

if (number <= 25) {
    console.log('1st quarter');
} else if (number <= 50) {
    console.log('2nd quarter');
}else if (number <= 75) {
    console.log('3rd quarter');
}else {
    console.log('4th quarter');
}
*/

/*
let number = Math.floor(Math.random() * 100) + 1;

console.log(number);
if (number <= 50) console.log('1st half');
else console.log('2nd half');
*/

/*
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;

console.log(num1 + num2);
console.log((num1 + num2) % 2 === 0);
*/

/*
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;

console.log(num1 * num2);
console.log((num1 * num2) % 2 !== 0);
*/

/*
function rectangleArea(x,y){
    return x * y;
}

console.log(rectangleArea(x, y));
*/

/*
function rectanglePerimeter(x, y){
    return 2 * (x + y);
}

console.log(rectanglePerimeter(5, 4));
console.log(rectanglePerimeter(3, 7));
console.log(rectanglePerimeter(6, 10));
*/

/*
function doubleWord(string){
    return string.repeat(2); or return string + string;
}
*/
/*
function firstCharacter(string){
    return string.at(0);  or return string[0]; or return string,charAt(0);
}

console.log(firstCharacter("Tech"));
console.log(firstCharacter("Global"));
*/
/*
function firstTwoCharacters(string){
    if (string.length < 2) return string;
    else return string[0] + string[1];//  return string.slice(0,2);  
}

console.log(firstTwoCharacters("Tech"));
console.log(firstTwoCharacters("Global"));
console.log(firstTwoCharacters(""));
console.log(firstTwoCharacters(" "));
console.log(firstTwoCharacters("1"));
*/

/*
let s1 = "";


console.log('The first char is = ' + s1[0]);
console.log('The first char is = ' + s1.at(0));
console.log('The first char is = ' + s1.charAt(0));
console.log('The first char is = ' + s1.charCodeAt(0));
console.log('The first char is = ' + s1.slice(0));
console.log('The first char is = ' + s1.substring(0));

console.log('The first char is = ' + s1[s1.length - 1]);
console.log('The first char is = ' + s1.at (- 1));
console.log('The first char is = ' + s1.charAt(s1.length - 1));
console.log('The first char is = ' + s1.charCodeAt(s1.length - 1));
console.log('The first char is = ' + s1.slice( - 1));
console.log('The first char is = ' + s1.substring(s1.length - 1));
*/


/*
function lastCharacter(string){
    return string.charAt(string.length - 1);
}

function lastCharacter(string){
    return string.slice((- 1));
}
*/


/*
console.log("".at(0));
console.log("".charCodeAt(0));

console.log("".charAt(0));
console.log(""[0]);
*/
/*
function lastTwoCharacters(string){
    return string.slice(string.length - 2); //string.charAt(string.length-2) + string.charAt(string.length-1);
}

console.log(lastTwoCharacters("Tech"));
console.log(lastTwoCharacters("Global"));
console.log(lastTwoCharacters(""));
console.log(lastTwoCharacters(" "));
console.log(lastTwoCharacters("1"));
*/

/*
function firstLast(string){
    if (string.length < 2) {
        return string;
    }
    else {
    return string.slice(0, 1) + string.slice(-1);
}}

or

function firstLast(string){
    if (string.length < 2) return string;
    return string[0] + string[string.length - 1];
  }
console.log(firstLast("Tech"));
console.log(firstLast("TechGlobal"));
console.log(firstLast(""));
console.log(firstLast(" "));
console.log(firstLast("1"));
console.log(firstLast("abcde"));
*/
/*
console.log(""[0]);
console.log("".charAt(0));
console.log("".at(0));
console.log("".slice(0,1));
console.log("".substring(0,1));
*/

/*
function hasFive(string){
    return string.length >= 5;
}

console.log(hasFive("Tech"));
console.log(hasFive("Global"));
console.log(hasFive(""));
console.log(hasFive(" "));
console.log(hasFive("12345"));
console.log(hasFive("hello"));
*/

function middle(string){
    if (string.length % 2 !== 0){
        return string.charAt(Math.floor(string.length/2));
    }
    else {
        return string.slice((string.length / 2 - 1), string.length / 2 + 1);
    }
}

console.log(middle("Tech"));
console.log(middle("Global"));
console.log(middle("abcde"));
console.log(middle(""));
console.log(middle(" "));
console.log(middle("1"));
console.log(middle("abc"));
console.log(middle("1234"));

/*
function longer(str1, str2){
    if (str1.length >= str2.length){
        return str1;
    }
    else {
        return str2;
    }
}

console.log(longer("Tech", "Global"));
console.log(longer("Hello", "Hi"));
console.log(longer("Hello", "World"));
console.log(longer("", "World"));
*/
/*
function shorter(str1, str2){
    if (str2.length <= str1.length){
        return str2;
    }
    else{
        return str1;
    }
}

console.log(shorter("Tech", "Global"));
console.log(shorter("Hello", "Hi"));
console.log(shorter("Hello", "World"));
console.log(shorter("", "World"));
*/
/*
function concat(str1, str2){
    return str1.concat(str2);
}
or
function concat(str1, str2){
    return str1 + str2;
}

console.log(concat("Tech", "Global"));
console.log(concat("Hello", "World"));
console.log(concat("", "abc"));
console.log(concat("123", "1234"));
*/
/*
function startVowel(string){
    return 'aeiouAEIOU'.includes(string[0]);
}

console.log(startVowel("Tech"));
console.log(startVowel("Apple"));
console.log(startVowel("abc"));
*/
/*
random = Math.floor(Math.random() * 11) - 5;
console.log(random);
console.log(random > 0);

random1 = Math.floor(Math.random() * 10) + 1;
random2 = Math.floor(Math.random() * 10) + 1;
random3 = Math.floor(Math.random() * 10) + 1;
console.log(random1, random2, random3);
console.log(Math.min(random1, random2, random3));

function lastCharacter(string){
    return string.charAt(string.length - 1);
}

console.log(lastCharacter("Tech"));
console.log(lastCharacter("Global"));
console.log(lastCharacter(" "));
console.log(lastCharacter("123"));


let random = Math.floor(Math.random() * 100) + 1;
console.log (random);

if (random <= 50) {
 
console.log("1st half");
}
else{
console.log("2nd half");
}

console.log(("hello" !== "world" && "apple" + "pie" === "applepie")) // || 
console.log((5 + 5 !== "10" && 7 % 2 === 0));

console.log(typeof("Hello"));

function startVowel(string) {
    let str = string.toLowerCase();
    return str[0] === "a" || str[0] === "e" || str[0] === "o" || str[0] === "u" || str[0] === "i";
  }     
  console.log(startVowel("Tech"));
  console.log(startVowel("Apple"));
  console.log(startVowel("abc"));
*/

let string = "I like arrays";

console.log(string.split(""));