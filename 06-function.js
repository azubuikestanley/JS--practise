//Comparisons with the Logical And Operator
function testLogicalAnd(val) {

   /* Check code below comment for easier way of doing same code
    if (val <= 50) {
        if (val >= 25) {
            return "Yes";
        }
    }  1.20.19
    */  

    if (val <= 50 && val >= 25) {
            return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(10));
console.log("---------------------");

//Comparisons with the Logical Or Operator
function testLogicalOr(val) {
   /* Check code below comment for easier way of doing same code
     if (val < 10) {
             return "Outside";
     }
     if (val > 20) {
     return "Outside";
     }
     */

    if (val < 10 || val > 20) {
        return "Outside";
    }
     return "Inside";
 }
 
 console.log(testLogicalOr(10)); 
console.log("---------------------");

//Else Statements
function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    }else {
        result = "5 or smaller";
    }
    return result;
}
console.log(testElse(10)); 
console.log("---------------------");

//Else If Statements
function testElseIf(val) {

    if (val > 10) {
        return "Greater than 10";
    }else if (val < 5) {
        return  "smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(9)); 
console.log("---------------------");

//Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(3));
console.log("---------------------");

//Chaining If Else Statements
function testSize(num) {

    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
        return "Huge"
    }
}

console.log(testSize(7));

/*
Write chained if/else if statements to fulfill the following conditions:
num < 5 -return "Tiny"
num < 10 -return "Small"
num < 15 -return "Medium"
num < 20 -return "Large"
num >= 20 -return "Huge"
*/
console.log("---------------------");

//Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
}

//change these values to test
console.log(golfScore(5, 3));

/*
Strokes             Return
1                   "Hole-in-one!"
<= par - 2          "Eagle"
par - 1             "Birdie"
par                 "Par"
par + 1             "Bogey"
par + 2             "Double Bogey"
>= par + 3          "Go Home!"
*/
console.log("---------------------");

//Switch Statements
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1: 
            answer = "alpha";
            break;
        case 2: 
            answer = "beta";
            break;
        case 3: 
            answer = "gamma";
            break;
        case 4: 
            answer = "delta";
            break;
    }
    return answer;
}

//change this value to test
console.log(caseInSwitch(4));

/* 
Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/
console.log("---------------------");

//Default Option in switch statements
function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case "a": 
            answer = "apple";
            break;
        case "b": 
            answer = "bird";
            break;
        case "c": 
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

//change this value to test
console.log(switchOfStuff(3)); 
console.log("---------------------");

//Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

//Change this value to test
console.log(sequentialSizes(9));
console.log("---------------------");

//Replacing If Else Chains with Switch
function chainToSwitch(val) {
   
//we will change this chain of if else statement to a switch statement    
/*
var answer = "";
if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "Missed me by this much!";
    } else if (val === 7) {
        answer = "Ate Nine";
    }

    return answer;
*/

//same if else statement in switch statement

switch(val) {
    case "bob": 
        return "Marley";
        break;
    case 42: 
        return "The Answer";
        break;
    case 1:
        return "There is no #1";
        break;
    case 99:
        return "Missed me by this much!";
        break;
    case 7:
        return "Ate Nine";
        break;
    } 
}
console.log(chainToSwitch(7)); 
console.log("---------------------");

//Return Boolean Values from functions
function isLess(a, b) {
    //Fix this code with shorter code as seen below comment
 /*
    if (a < b) {
        return true;
    } else {
        return false;
    }
*/
    return a < b;
}
 
//change these value to test 
console.log(isLess(10, 15));
console.log("---------------------");

//Returning Early Pattern from Functions
//Setup
function abTest(a, b) {
    //Only change code below this line

    if (a , 0 || b < 0) {
        return undefined;
    }

    //Only change code above this line
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2));
console.log("---------------------");

//Counting Cards
var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
        
    }

    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }
    return count + " " + holdbet;
}
cc(2); cc('k'); cc(10); cc('K'); cc('A');
console.log(cc(4));
console.log("---------------------");



















