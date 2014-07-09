// Write a program that will take a hardcoded string, 
// and console log the reverse it. Use a for loop

// var inputString = "building"

// //My Practice
// var reverse = function(putString) {
// 	for (var a = [], i = 1; i < putString.length)
// }


// //Adams Methods
// for (var array = [], i = 1; i <= inputString.length; i++) {
//     array.push(inputString.charAt(inputString.length - i));

//   }
//   var new_string = array.join('');
//   console.log(new_string);

// }

//Dustin Method
var inputString = "building";
var outputString = ""; 

for (var i =1; i <= inputString.length; i++) { 
	outputString += inputString[inputString.length-i]; 
};

console.log(outputString);

// // Dustin Method with Randall Help
// var inputString = "building";

// var reverse = []; 

// for (var)



// // Randalls Method
// var inputString = "building";

// var reverseString = [];

// for(var i = inputString.length-1; i >= 0;i--) {
// reverseString += inputString[i];
// }console.log(reverseString);
