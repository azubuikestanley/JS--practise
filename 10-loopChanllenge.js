
//Profile Lookup
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property"; 
        }
    }
    return "No such contact"; 
}

//Change these values to test your function
var data = lookUpProfile("Akira", "likes");
console.log(data);
console.log("---------------------"); 

//Genrate Random Fractions
function randomFraction() {

    return Math.random();
}

console.log(randomFraction());
console.log("---------------------"); 


//Genrate Random Whole Numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());
console.log("---------------------"); 

//Generate Random Whole Numbers within a Range
//Example
function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax -ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(1, 9));
console.log("---------------------"); 

//Use the parseInt Function
function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("56")); 
console.log("---------------------");

//Use the parseInt Function with a Radix
function convertToIntegerBase(str) {
    return parseInt(str, 2);
}
console.log(convertToIntegerBase("10011")); 
console.log("---------------------"); 

//Use the Conditional (Ternary) Operator
// condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
    /*  if statement below would be replaced with ternary operator
    if(a === b) {
        return true;
    }
    else {
        return false;
    }
    */
    return a === b ? true : false;

    //ternary operator above will do same thing as code in comment below
    // return a === b; 
}

console.log(checkEqual(1, 2));
console.log("---------------------"); 

//Use Multiple Conditional (Ternary) Operators   (Nested conditional operator)
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(-4)); 
console.log("---------------------"); 
















