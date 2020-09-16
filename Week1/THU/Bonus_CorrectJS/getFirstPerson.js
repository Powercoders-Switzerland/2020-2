
/**
 * returns the first person in the list
 */
var getFirstPerson = function () {
  var people = [];
  people.push("John");
  people.push("Bob");
  people.push("Sarah");


  return people[0];

}

console.log(getFirstPerson());

/** the index in an array starts with 0 => the first entry in an array needs to be called with [0] */