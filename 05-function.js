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

//Return a value from a Function with Return 1:02:41
console.log("---------------------");


