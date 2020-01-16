//Write Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
console.log("---------------------"); 

//Write Higher Order Arrow Functions
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));
console.log("---------------------"); 

//Use the Rest Operator with Function Parameters
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));
console.log("---------------------"); 

//Use the spread Operator to Evaluate Arrays in-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    // arr2 = arr1;  //Change this line
    arr2 = [...arr1];  //spread operator, a copy of arr1 is assign to 2
    arr1[0] = 'potato'
})();
console.log(arr2);
console.log("---------------------"); 

//Use destructuring Assignment to Assign variables from objects
var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x   // x = 3.6
var y = voxel.y   // x = 7.4
var z = voxel.z   // x = 6.54

const { x : a, y : b, z : c } = voxel;  //a = 3.6, b = 7.4, c = 6.54


const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};


function getTempOfTmrw(avgTemperatures) {
    "use strict";
    //change code below this line
    const { tomorrow : tempOfTomorrow } = avgTemperatures; //change this line
    // change code above this line
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));
console.log("---------------------"); 

//Destructuring Assignment with Nested Objects
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow : { max : maxOfTomorrow }} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));
console.log("---------------------"); 

//Use Destructuring Assignment to Assign variables from Arrays
const [k, l, , n] = [1, 2, 3, 4, 5, 6];
console.log(k, l, n);

let i = 8, j = 6;
(() => {
    "use strict";
    [i, j] = [j, i]
})();
console.log(i); 
console.log(j); 
console.log("---------------------");

//Use Destructuring Assignment with the Rest Operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

    const [ , , ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);
console.log("---------------------"); 

//Use Destructuring Assignment to pass an object as a function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {

    return function half({ max, min }) {
        return (max + min) / 2.0;
    };

})();
console.log(stats);
console.log(half(stats));
console.log("---------------------"); 

//Create Strings using Template literals
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
console.log("---------------------"); 

//challenge
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return resultDisplayArray;
}

/*
*makeList(result.failure) should return:
*[`<li class="text-warning">no-var</li>`,
  `<li class="text-warning">var-on-top</li>`,
  `<li class="text-warning">linebreak</li>` ]
*/

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray); 
console.log("---------------------"); 

//Write concise object literal declarations using simple fields
/*
const createPerson = (name, age, gender) => {

    return {
        name: name,
        age: age,
        gender: gender
    };
}; 
 same as below but shorter */

 const createPerson = (name, age, gender) => ( { name, age, gender} );
console.log(createPerson("Zodiac Hasbro", 56, "Male")); 
console.log("---------------------"); 

//Write concise declarative functions
const bicycle = {
    gear: 2,
    // setGear: function(newGear) {
        setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);
console.log("---------------------"); 




