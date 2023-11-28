// ES5

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }


// Refactor it to use the rest operator & an arrow function
/* Write an ES2015 Version */

