// Output the following letter grade from a variable with with 
// a test score. Display either "A", "B", "C", "D", or "F", for an 
// score that is an integer between 0 and 100. Try and use a switch statement.

var grade = 88;
switch (true) { 
	case (grade < 60):
		console.log("F");
		break;
	case (grade < 70 && grade >= 60):
		console.log("D"); 
		break; 
	case (grade < 80 && grade >= 70):
		console.log("C");
		break;
	case (grade < 90 && grade >= 80):
		console.log("B");
		break;
	case (grade <= 100 && grade >= 90):
		console.log("A");
		break;
	default: 
		console.log("Sorry, not valid, try again");
};
// grade(34);
// grade(64);
// grade(75);
// grade(88);
// grade(93);
// grade(100);

// grade(70);