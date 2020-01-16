//Use class syntax to define a constructor function
/*
 var SpaceShuttle = function(targetPlanet) {
     this.targetPlanet = targetPlanet;
 }
 /this SpaceShuttle var would work the same as the class spaceShuttle with constructor as seen below
*/

class SpaceShuttle {
    constructor (targetPlanet) {
    this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet)

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);
console.log("---------------------"); 









//Use getters and setters to Control Access to an Object
class Book {
    constructoe(author) {
        this._author = author;
    }
    //getter
    get writer(){
        return this._author;
    }
    //setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

function makeClassTwo() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClassTwo();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
console.log("---------------------"); 













