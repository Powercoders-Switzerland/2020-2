/**
 * returns the nth fibbonaci number
 * remember, fibbonaci numbers are the sum of the previous
 * 2 numbers, starting with 1 and 1.
 */
var fibbonaci = function (n) {
  var a = 1, b = 0, temp;
  
  if (n == 1) {
    return 1;
  }

  while (n > 0){
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
};

console.log(fibbonaci(5));

/** in line 14 to 16 there used to be 2 equal signs ==, which is wrong.
 * = to assign a new value to a variable
 * == to compare two values with each other
 * === to compare value and type of two variables with each other
 */
