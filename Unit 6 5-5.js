// Joseph K. Jin
// CS 81
// Assignment 6
// Chapter 5
// Problem #5

//function for a random number between two numbers
function randomNum(min, max) {
	//pick random number within user defined range
	//(max-min)+1 -> possible number of results
	//+ min -> starting number
	return Math.floor(Math.random() * ((max-min)+1) + min);
};

//user input
var n = prompt("Enter two numbers, start and end, to pick a random number separated by space.").split(" ");
//user defined min & max
var min = parseFloat(n[0]);
var max = parseFloat(n[1]);
//output
alert("Between " + min + " and " + max + ", " + randomNum(min, max) + " is picked!");