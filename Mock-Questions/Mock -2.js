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
      let array = string.trim().split(" ");
      return array[0].concat(array.at(-1));
    }

/*const firstLastWord = (string) => {
        if (string.includes(" ")) return string.slice(0, string.indexOf(" ")) + string.slice(string.lastIndexOf(" ") + 1);
        else return string + string;
    }
*/

console.log(firstLastWord("Hello World"));
console.log(firstLastWord("I like JavaScript"));
console.log(firstLastWord("Hello")); 
console.log(firstLastWord(""));
console.log(firstLastWord("  "));