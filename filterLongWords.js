// Hardcode an array of words. Have a variable maxLength, 
// push words that are less than the maxLength into a new array, 
// and console.log that.


var word = ['joe', 'john', 'smith', 'bob', 'jack', 'jones'];
var maxLength = 5;

for (var i = 0, array = []; i < word.length; i++) {
	if (word[i].length < maxLength) {
		array.push(word[i]);

	};
};
console.log(array); 
