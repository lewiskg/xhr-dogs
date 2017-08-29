
function executeThisCodeAfterFileLoads (){
	var dogsData = JSON.parse(this.responseText).dogs;
	// console.log("dogs", dogsData);
	getBreedz(dogsData);
	
};

function executeThisCodeIfFileErrors() {
	console.log("Shit's broke");
};

var myDawgz = new XMLHttpRequest();
myDawgz.addEventListener("load", executeThisCodeAfterFileLoads);
myDawgz.addEventListener("error", executeThisCodeIfFileErrors);
myDawgz.open("GET", "dogs.json");
myDawgz.send();


function getBreedz(dogz) {
	// dogz = dogsData;
	var myBreedz = new XMLHttpRequest();
	myBreedz.addEventListener("load", executeThisCodeAfterFileLoads2);
	myBreedz.addEventListener("error", executeThisCodeIfFileErrors);
	myBreedz.open("GET", "breeds.json");
	myBreedz.send();

	function executeThisCodeAfterFileLoads2 () {
		var breedsData = JSON.parse(this.responseText).breeds;
		combinedArray(dogz, breedsData);
}
}

function combinedArray (dogsArray, breedsArray) {
	// console.log("dogsArray", dogsArray);
	// 
	//loop through the dogs - look at breed_id
	dogsArray.forEach(function(dog) {
		// console.log("one dog", dog);
		var currentBreedId = dog["breed-id"];
		
		// console.log("dog breed_id", currentBreedId);
		breedsArray.forEach(function(breed) {
			if(currentBreedId ===  breed.id) {
			//console.log("one breed", breed);
			dog["dogBreed"] = breed.name;
			dog["basePrice"] = breed["base-price"];
			dog["description"] = breed.description;
			dog["finalPrice"] = dog.basePrice + dog["add-on-price"];
		}
		});
		
	});
	// loop through the breeds and find matching breeds
	// make final price
	console.log("all the dogs", dogsArray);
	domString(dogsArray);
}

function domString (dogs) {
	var reallyLongDomString = "";


	writeToDom(reallyLongDomString)

}

function writeToDom (strang) {
	//put in the dom
}

