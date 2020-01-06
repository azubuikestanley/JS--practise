//Store Multiple Values with Arrays
//Example
var ourArray = ["John", 23];

//Nested Arrays
var ourArray = [["The world", 893], ["is everything", 101010]];

//Access Array data with Indexes
//Example
var ourArray = [50,60,70];
var ourData = ourArray[0];  //equals 50
console.log(ourData);
console.log("---------------------");

//Modify Array data with Indexes
//Example
var ourArray = [18,60,88];
ourArray[1] = 55;  //ourArray now equals [18,55,88]
console.log(ourArray); 
console.log("---------------------");

//Access multi-Dimensional Arrays with Indexes
//Example
var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12], 13, 14]];

var myData = myArray[3][0][0]
console.log(myData); 
console.log("---------------------");

//Manipulate Arrays with push()
//Example
var ourArray = ["Stimpson","J","cat"];
ourArray.push(["happy", "joy"]);

console.log(ourArray);  
console.log("---------------------");

//Manipulate Arrays with pop()
//Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
 
console.log(ourArray);  
console.log("---------------------");

//Manipulate Arrays with shift()
//Example
var ourArray = ["Stacy","JD",["Fish"]];
var removedFromOurArray = ourArray.shift();

console.log(ourArray);  
console.log("---------------------");

//Manipulate Arrays with unshift()
//Example
var ourArray = ["Stacy","JD",["Fish"]];
ourArray.shift();
ourArray.unshift("Yeah");

console.log(ourArray);  
console.log("---------------------");

//Shopping list
//Example of nested arrays
var myList = [["cereal", 3], ["milk", 2], ["banana", 3],["Juice", 2], ["eggs", 12]];
console.log(myList); 
console.log("---------------------");

//Write reusable Code with Functions
console.log("---------------------");



