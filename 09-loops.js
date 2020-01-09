//Iterate with while loops
var myArray = [];

var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);
console.log("---------------------");

//Iterate with For Loops
var ourArray = [];

for (var i = 0; i < 6; i++) {
    ourArray.push(i);
}
console.log(ourArray);
console.log("---------------------");

//Iterate even Numbers with a For Loop
//Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}
console.log(ourArray);
console.log("---------------------");

//Iterate Odd Numbers with a For Loop
//Example
var ourArray = [];

for (var i = 1; i < 10; i += 2) { 
    ourArray.push(i);
}
console.log(ourArray);
console.log("---------------------");


//Count backwards (even number) with a For Loop
//Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) { 
    ourArray.push(i);
}
console.log(ourArray);
console.log("---------------------");

//Count backwards (odd number) with a For Loop
//Example
var myArray = [];

for (var i = 9; i > 0; i -= 2) { 
    myArray.push(i);
}
console.log(myArray);
console.log("---------------------");

//Iterate Through an Array with a for loop
//Example 
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

console.log(ourTotal);
console.log("---------------------");
 
//Nesting For Loops
function multiplyAll(arr) {
    var product = 1;

        for (var i=0; i < arr.length; i++) {
            for (var j=0; j < arr[i].length; j++) {
                product *= arr[i][j]; 
            }
        }
    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);
console.log("---------------------");

//Iterate with  DO...While Loops
//Setup
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5)
console.log(i, myArray); 
console.log("---------------------");
  




 













