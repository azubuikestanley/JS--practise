//Write reusable Code with Functions
//Example
function ourReusableFunction() {
    console.log("Heyya, World");
}

ourReusableFunction(); 

console.log("---------------------");

//Passing Values to Functions with Arguments
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5);  //outputs 5

function FunctionWithArgs(a, b) {
    console.log(a + b);
}
FunctionWithArgs(10, 5);  //outputs 5
console.log("---------------------");


//Global Scope and Functions
//Declare your variable here (Global scope)
var myGlobal = 10;

function fun1() {
    //Assign 5 to oopsGlobal here (local scope)
    let oopsGlobal = 5;
}


function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();
console.log("---------------------");

//Local scope and functions
function myLocalScope() {
    var myVar = 5
    console.log(myVar);
}
myLocalScope();

console.log("---------------------");

//Global vs. local scope in Functions
var outerWear = "T-Shirt (global scope)";

function myOutfit() {
    var outerWear = "sweater (local scope)";
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);
console.log("---------------------");

//Return a value from a Function with Return
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(3));
console.log("---------------------");

//Understanding Undefined Value returned from a function
//Example retrun undefined below there's no return in the function
var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5;
}
console.log(addThree(0));
console.log(addFive(0));
console.log("---------------------");

//Assignment with a Returned Value
var changed = 0;
function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

console.log(changed);

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);
console.log(processed)
console.log("---------------------");

//Stand in line
function nextInLine(arr, item) {
    //Your code here
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
console.log("---------------------");

//Boolean values
//data type that has only two value, true or false where true is on and false is off
function welcomeToBooleans() {
    return false;
}
console.log(welcomeToBooleans());
console.log("---------------------");

//Use Conditional Logic with if Statements
//Example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}
console.log(ourTrueOrFalse());

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));
console.log("---------------------");

//Comparison with the Equality Operator
//Setup
//= means assign, == means equal, === means Strict equality operator, equivalent
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));
console.log("---------------------");

//Comparison with the Strict equality operator
//Setup
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

//Change this value to test
console.log(testStrict(7));

/*
3 === 3         ||  will be true in example above
3 === '3'       ||  will be false in example above
*/
console.log("---------------------");

//Practice Comparing Different values
//Setup
function compareEquality(a, b) {
    if (a === b) { //change == to === and vice versa to test difference
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));
console.log("---------------------");

//Comparison with the Inequality Operator
//Setup
function testNotEqual(val) {
    if (val != 90) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));
console.log("---------------------");

//Comparison with the Strict Inequality Operator
//Setup
function testStrictNotEqual(val) {
    if (val !== 90) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual("90"));
console.log("---------------------");

//Comparisons with the Logical and Operator
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}

console.log(testGreaterThan(10));
console.log("---------------------");

//Comparisons with the Greater than or Equal to Operator
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or over";
    }

    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}

console.log(testGreaterOrEqual(10));
console.log("---------------------");

//Comparisons with the less than Operator
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) {
        return "Under 55";
    }
    return "55 or over";
}

console.log(testLessThan(10));
console.log("---------------------");

//Comparisons with the less than or Equal to Operator
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller than or equal to 12";
    }

    if (val <= 24) {
        return "Smaller than or equal to 24";
    }
    return "More than 24";
}

console.log(testLessOrEqual(10));
console.log("---------------------");




















