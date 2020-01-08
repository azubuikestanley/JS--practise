//Build Javascript Object
// Example
var ourDog = {
    "name": "Camper",
    "leg": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};
 
console.log(ourDog, myDog);
console.log("---------------------");

//Accessing Object properties with dot notation
//Example
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue, shirtValue);
console.log("---------------------");

//Accessing Object properties with Bracket notation
//Example
var testingObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testingObj["an entree"];
var sideValue = testingObj[`my side`];
var drinkValue = testingObj['the drink']; 
console.log(entreeValue, sideValue, drinkValue);
console.log("---------------------");

//Accessing Object Properties with Variables
//Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player);
console.log("---------------------");

//Updating Object Properties
//Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"],
};

ourDog.name = "Happy Camper";

var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
};

myDog.name = "Happy Coder";
console.log(ourDog.name, myDog);
console.log("---------------------");

//Add New Properties to an object
//Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

//setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog['bark'] = "woof!"
console.log(ourDog, myDog); 
console.log("---------------------");

//Delete Properties from an Object
//Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

delete ourDog.bark;

//setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof!"
};
delete myDog['tails'];

console.log(ourDog, myDog); 
console.log("---------------------");

//Using Objects for Lookups
//Setup
function phoneticLookup(val) {

    /*
    we can create an object and use it for lookup instead of 
    using a switch statement, check the example after comment
   
    var result = "";

    switch(val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
            break;
    }
    */

   var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    };

    result = lookup[val];

    return result;
}

console.log(phoneticLookup("charlie")); 
console.log("---------------------");

//Testing Objects for properties
//Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}

console.log(checkObj("pet"))
console.log("---------------------");

//Manipulating Complex Objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    //Add record here
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "YouTube video"
        ]
    }
];
console.log(myMusic);
console.log("---------------------");

//Accessing Nested Objects
//Setup
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs" 
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);
console.log("---------------------");

//Accessing Nested Arrays
//Setup
var myPlanets = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlanets[1].list[1];
console.log(secondTree);
console.log("---------------------");























