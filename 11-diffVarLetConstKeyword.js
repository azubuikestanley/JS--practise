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
    //a good to remember a variable is a constant is to use all cap letters as shown below in comment
    
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
console.log(s)
console.log("---------------------"); 

//Prevent Object Mutation  2:44:54
console.log("---------------------"); 






