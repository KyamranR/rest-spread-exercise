// ES5

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }


// Refactor it to use the rest operator & an arrow function
/* Write an ES2015 Version */

const filterOutOdds = (...nums) => nums.filter(val => % 2 === 0);


// findMin

// Write a function called findMin that accepts a variable 
// number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

const findMin = (...minNum) => Math.min(...minNum);


findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1


// mergeObjects

// Write a function called mergeObjects that accepts two 
// objects and returns a new object which contains all the 
// keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}


