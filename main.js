console.log("poop");




// var dogs = []
// var breeds = []

function executeThisCodeAfterFileLoads (){
	// console.log("this", this.responseText);
	var data = JSON.parse(this.responseText).dogs;
	console.log("dogs", data);
};

function executeThisCodeAfterFileLoads2 () {
	// console.log("this", this.responseText);
	var data = JSON.parse(this.responseText).breeds;
	console.log("breeds", data);
};


function executeThisCodeIfFileErrors() {
	console.log("Shit's broke");

};

var myDogs = new XMLHttpRequest();
myDogs.addEventListener("load", executeThisCodeAfterFileLoads);
myDogs.addEventListener("error", executeThisCodeIfFileErrors);
myDogs.open("GET", "dogs.json");
myDogs.send();

var myBreeds = new XMLHttpRequest();
myBreeds.addEventListener("load", executeThisCodeAfterFileLoads2);
myBreeds.addEventListener("error", executeThisCodeIfFileErrors);
myBreeds.open("GET", "breeds.json");
myBreed.send();