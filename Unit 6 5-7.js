// Joseph K. Jin
// CS 81
// Assignment 6
// Chapter 5
// Problem #7

//function that counts number of zeros
//Note: this will count leading 0 as well as -0 & +0 but not trailing 0
function numZero(x) {
	//initialize values
	var n = 0;
	//loop to check each value in array
	for (var i = 0; i < x.length; i += 1) {
		//check for 0
		if (parseFloat(x[i]) === 0) {
			//counter
			n += 1;			
		}
	}
	//return result
	return n;
};

//user inputs set of numbers separated by space
var x = prompt("Enter your values separated by space.").split(" ");
//output result
alert("There are " + numZero(x) + " zeros in an array!");