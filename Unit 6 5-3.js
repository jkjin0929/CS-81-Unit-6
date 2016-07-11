// Joseph K. Jin
// CS 81
// Assignment 6
// Chapter 5
// Problem #3

//function that gets numbers from an array and calculates for avg
function average(x) {
	//initializing values to be used
	var sum = 0;
	var result = 0;
	var n = 0;
	//loop to calculate sum
	for (var i = 0; i < x.length; i += 1) {
		//converts value to float then add it to the sum
		sum += parseFloat(x[i]);
		//set of numbers counter
		n += 1;
	}
	//calculate for average
	result = sum / n;
	return result;
};

//user inputs set of numbers separated by space
var x = prompt("Enter numbers for their average.  Use space to separate each numbers.").split(" ");
//output result
alert("The average is " + average(x));