/**
 * returns the average of numbers a and b
 */
var average = function (a, b) {
	return (a + b) / 2;
};
/* the brackets () were missing. 
Without them the order of operations starts with the division first and does the sum as second operation.
Adding brackets changes the order: first the sum, then the division. */