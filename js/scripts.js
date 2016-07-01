//JS file

console.log("hello world");
function add(x,y){
	console.log(x+y);
}

var classmates = ["Matt", "Tara", "Daniel", "Evan"];
var GenArray = [1,2,3,4]
var typeOfSoda = new Array();
typeOfSoda[0] = "Red Cream Soda";
typeOfSoda[1] = "IBC";

console.log(typeOfSoda);
console.log(classmates);



var arrayLength = classmates.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(classmates[i]);	
}

//This is more appropiate.
for (var i in classmates){
	console.log(classmates[i]);
}

var mixedTypearray = ["Elephant", 100, (5>2)];
var sameType = ["Elephant", "Giraffe", "Duck"];


/*
function displayArray(){
for (var i in GenArray){
	console.log(GenArray[i]);
}

}
*/

function displayArray(GenericArray){
for (var i in GenericArray){
	console.log(GenericArray[i]);
}
}




var randomNumberArray = [20,45,76,3,90];


function checkRandomArray(valueToCheck){
for (var i in randomNumberArray){
	if (randomNumberArray[i] === valueToCheck){
		return "The value: " + valueToCheck + " is in the array";
	}else{
		return "Nop";
	}
}
}

/*BRONZE:
    See if you can turn any of those loops above into functions that can be called. 
    Call them in the console.

    and/or 
https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=mozilla%20docs%20javascript
    Go to the Mozilla Docs and play with the built-in array methods. Manipulate the array in some way.

SILVER: 
    Create an array of about 10 random numbers. Find a way to check to see if another random 
    number is in that array.
    var randomNumberArray = [57, 58, 92, 10, 11, 83, 20, 28];

GOLD: 
    See if you can do the following to the abcArray:
        1. Add the rest of the alphabet without altering the array we've already created.
        2. Turn the alphabet to a string and take out those commmas/spaces.
        3. Print the alphabet in reverse order.
        4. See if you can do all of that and execute it in one word.
*/


/*************************Do not go above this line right now************************************************/
/*************************Do not go above this line right now************************************************/

//OBJECT LITERAL
var friend = {
	//Properties
	fullname      :"",
	age		      : 0,
	married       : true,
	vocation      : "",
	closeLikeABro : true,
	yearsKnown    : 0,

	//Method
	printVocation : function(){
		return this.vocation;
	},

	introduceToSisterInLaw : function(){
		if (this.yearsKnown >= 5 && this.closeLikeABro === true && this.married == false){
			return "I want you to meet Lizzy.";

		} else{
			return "Have you tried Tinder?";
		}
	},
	}


var nickKirkes = Object.create(friend);
nickKirkes.fullname = "Nick Kirkes";
nickKirkes.age = 38;
nickKirkes.married = false;
nickKirkes.vocation = "project Manager at Sales Force";
nickKirkes.yearsKnown = 20;

var hansKloepfer = Object.create(friend);
hansKloepfer.fullname = "Hans Kloepfer";
hansKloepfer.age = 42;
hansKloepfer.married = false;
hansKloepfer.vocation = "Sailboat Captain";
hansKloepfer.yearsKnown = 31;

var michael = Object.create(friend);
michael.fullname = "Hans Kloepfer";
michael.age = 42;
michael.married = false;
michael.vocation = "Sailboat Captain";
michael.yearsKnown = 31;

















