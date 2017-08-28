console.log("poop");




// var dogs = []
// var breeds = []

function executeThisCodeAfterFileLoads (){
	// console.log("this", this.responseText);
	var data = JSON.parse(this.responseText).dogs;
	console.log("dogs", data);
};

// function executeThisCodeAfterFileLoads2 (){
// 	// console.log("this", this.responseText);
// 	var data = JSON.parse(this.responseText);
// 	domString(data.breeds);


// 	// domString(cats);
// }

function executeThisCodeIfFileErrors() {
	console.log("Shit's broke");

};

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "dogs.json");
myRequest.send();

// var myRequest2 = new XMLHttpRequest();
// myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
// myRequest2.addEventListener("error", executeThisCodeIfFileErrors);
// myRequest2.open("GET", "breeds.json");
// myRequest2.send();