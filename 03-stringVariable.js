//Example -  string
var firstName = "Rice";
var lastName = "Doe";

//Only change code below this line
var myFirstName = 'Bean';
var myLastName = `Bread`;
console.log("---------------------");

//Escaping Literal Quotes in Strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

//Quoting Strings with single quotes
var myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr2);
//Quoting Strings with sbackticks
var myStr2 = `'<a href="http://www.example.com" target="_blank">Link</a>'`;
console.log("---------------------");


//Escape sequences in strings
/*****
CODE OUTPUT
\' single quote
\' double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*****/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr)

console.log("---------------------");

//Concatenating strings with plus operator
// Example
var ourStr = "I come first." + "I come second.";
console.log(ourStr)
console.log("---------------------");

//Concatenating strings with plus Equals operator
var ourStr = "This is the first sentence.";
ourStr += "This is the second sentence.";
console.log(ourStr)
console.log("---------------------");

//Constructing strings with variables
// Example
var ourName = "CodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
console.log(ourStr)
console.log("---------------------");

//Appending  variables to strings
// Example
var anAdjective = "awesome";
var ourStr = "CodeCamp is ";
ourStr += anAdjective;
console.log(ourStr)
console.log("---------------------");

//Finding length of string
//Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;
console.log(firstNameLength)
console.log("---------------------");

//Bracket Notation to find First Character in string
//Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName[0];
console.log(firstNameLength)
console.log("---------------------");

//String Immutability
//Example
var myStr = "Aello World";

myStr = "Hello World";
console.log(myStr)
console.log("---------------------");

//Bracket Notation to find Nth Character in string
//Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

console.log(secondLetterOfFirstName)
console.log("---------------------");

//Bracket Notation to find last Character in string
//Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

console.log(lastLetterOfFirstName)
console.log("---------------------");

//Bracket Notation to find Nth-to-last Character in string
//Example
var firstName = "Ada";
var thirdToLetterOfFirstName = firstName[firstName.length - 3];

console.log(thirdToLetterOfFirstName)
console.log("---------------------");


//Word Blanks
//Example
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    //Your code below this line
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + "."

    //Your code above this line
    return result;
}
//Change the words here to test your function

console.log(wordBlanks("dog", "big", "ran", "quickly",));
console.log("---------------------");


