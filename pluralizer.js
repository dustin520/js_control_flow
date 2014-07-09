// Take an input like

// thing = "cat"
// count = "5"
// and output the pluralized form of the word like "5 cats" or "1 dog"..

var input = function (num, noun) { 
	if (num > 1) { 
		console.log(num + " " + noun + "s");
	}else if (num === 1) {
		console.log(num + " " + noun);
	}else {
		console.log("please try again");
	};
};
input(5, "cat");
input(1, "dog");
input(0, "cow");
input ("hi", "moo");