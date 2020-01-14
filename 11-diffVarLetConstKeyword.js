//Differences between the var and let keywords
//let keyword would throw an error if the same variable was decleared twice in same scope
let catName = "Quincy";
let quote;

// let catName = "Beau";   //will throw an error, see below to see how the overwrite the previous catName variable
catName = "Beau";

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";
    return quote;
}
console.log(catTalk());  
console.log("---------------------"); 

//Compare Scopes of the var and let keywords

function checkScopeVar() {
    "use strict";
    // test the scope of let and var
    //var keyword when decleared is a global variable or a local variable if decleared in a function
    var j = "function scope";
    if(true) {
        j = "block scope";
        console.log("block scope j is: ", j);
    }
    console.log("Function scope j is: ", j);
    return j;
}
function checkScopeLet() {
    "use strict";
    //let keyword when decleared is limited to the block statement or expression that it was decleared in
    let i = "function scope";
    if(true) {
        let i = "block scope";
        console.log("block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScopeVar();
checkScopeLet();
console.log("---------------------"); 

//Declear a Read-Only Variable with the const keyword
function printManyTimes(str) {
    "use strict";

    const sentence = str + " is cool";
    //Remove comment and see that const is a read only variable and cannot be mutated
    // sentence = str + " is amazing!"  
    for(let i = 0; i < str.length; i += 2) {
        console.log(sentence); 
    }
    //a good way to remember that a variable is a constant is to use all cap letters as shown below
    
    const SENTENCE = str + " is Amazing";
     
    for(let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE); 
    }
}

printManyTimes("freeCodeCamp");
console.log("---------------------");

//Mutate an Array declared with const
const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    // s = [2, 5, 7];  //will throw an error when trying to mutate this way
    //const can not be mutated but an array in a const variable can be reassign as seen below
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

}
editInPlace();
console.log(s);
console.log("---------------------"); 

//Prevent Object Mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    /*const variable declared as array or object can still be mutated so
    use object.freeze to stop the const variable from mutating*/ 
    Object.freeze(MATH_CONSTANTS)

    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(PI);
console.log("---------------------");

//Use Arrow Functions to write concise Anonymous Functions
/*  Example of anonymous below, (a function without a name)
var magnet = function() {
    return new Date();
};
*/
//Above function can be writen as
var magnet = () => {
    return new Date();
};
//Above code can still be shortened further if function is returning one value
var magnet = () => new Date();
console.log(magnet);
console.log("---------------------"); 

//Write Arrow functions with Parameters
/*
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
function above can be written in an arrow function as shown below*/
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));
console.log("---------------------"); 

