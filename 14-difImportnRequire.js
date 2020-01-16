// Understand the differences between import and require
export const capitalizeString = str => str.toUpperCase()
console.log("---------------------"); 


//Use export to Reuse a code Block
 const capitalizeStringTwo = (String) => {
     return String.caharAt(0).toUpperCase() + String.slice(1);
 }

 export { capitalizeStringTwo };

 export const foo = "bar";
 export const bar = "foo";
console.log("---------------------"); 

//Use * to import Everything from a file
// below is how to import everything from a file
// import * from capitalizeStrings from "capitalize_strings";
 
console.log("---------------------"); 


;

//Import a default Export
//an import from a file with an export default wont need a {} around the file. 
import subtract from './15-exportDefault';

subtract(7,4);
console.log("---------------------"); 
