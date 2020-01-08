//Record Collection
//Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "Track": [
            "Let It Rock",
            "You Give Love A BAd Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ] 
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
//keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

//only change code below this line
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][props];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(2468, "tracks", "test"));
console.log("---------------------");



