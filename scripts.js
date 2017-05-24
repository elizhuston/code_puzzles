// sum an array of numbers
//
// Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.
var myArray = [10, 20, -2, 30];
var total = 0;

function sumArray(myArray) {

  for (var i = 0; i < myArray.length; i++) {

    total = total + myArray[i];
  }
  return total;
}

/* Write a function that takes three numbers:

a starting value
an end value
an increment
Return the sum of all numbers incremented from start up through the end.
Increment until meeting or exceeding the end value. For example,
given a start 3, an end 14, and an increment 4, we sum 3, 7, and 11,
returning 23.
*/
var sum = 0

function incrValue(startValue, endValue, incr) {
  for (var i = startValue; i < endValue; i += incr) {
    sum = sum + i;
    console.log('startValue=' + startValue + ' endValue ' + endValue + ' incr ' + incr);
    console.log('startValue ' + startValue);
    console.log('sum ' + sum);
  }
  return (sum);
}

// min and max values of an array
//
// Write a function that takes an array and returns the index of the smallest value.
//
// Write a function that takes an array and returns the index of the largest value.

// (In the case of ties, return the lower index.)
function min(myArray) {
  for (var i = 0, minValue = myArray[i]; i < myArray.length; i++) {
    if (myArray[i] < minValue) {
      minValue = myArray[i];
      var minValuePos = i;
    }
  }
  console.log('minValue ' + minValue);
  console.log('minValuePos ' + minValuePos);
  return (minValuePos);
}

min(myArray);


function max(myArray) {
  for (var i = 0, maxValue = myArray[i]; i < myArray.length; i++) {
    if (myArray[i] > maxValue) {
      maxValue = myArray[i];
      var maxValuePos = i;
    }
  }
  console.log('maxValue ' + maxValue);
  console.log('maxValuePos ' + maxValuePos);
  return (maxValuePos);
}

max(myArray);
incrValue(1, 5, 1);

sumArray(myArray);
console.log(total);


//  repeat a string
//
// // Write a function that takes a string and a positive integer and returns a new
// string which is the input string repeated the specified number of times. For example,
// for inputs "apple" and 4, return the string "appleappleappleapple".

function newString(myString, posInt) {
  for (var i = 0, myString2 = ""; i < posInt; i++) {
    myString2 = myString2 + myString;
  }
  console.log(myString2);
  return (myString2);

}

newString('Test My String n ', 3);



// find the factors of an integer
// // Write a function that takes an integer and returns an array of its factors
// (the other integers by which it's evenly divisible). For example, given the integer 18,
// return the array [2, 3, 6, 9]. If the integer has no factors, return an empty array.

function fact(myInt) {
  var myFactors = [];
  for (i = 2; i < myInt; i++) {
    if (myInt % [i] === 0) {
      myFactors.push(i);
    }
  }
  console.log('myFactors ' + myFactors);
  return (myFactors);
}

fact(18);


// random number within a range
// The Math.random function returns a random number between 0.0 and 1.0 (inclusive).
// Write a function that takes two numbers and returns a random number within range of
// the two numbers. For example, for the inputs 3.6
// and 8.2, the function might return 3.6, or 8.2, or something in between.
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  rand = Math.random();
  console.log('rand ' + rand);
  console.log(Math.floor(rand * (max - min)) + min);
  return Math.floor(rand * (max - min)) + min;

}

getRandom(1, 4)


// random element from an array
//
// Write a function that takes an array and returns a random element from the array. For example,
//  given the array [6, 2, 8], randomly return either 6, 2, or 8. (Use the Math.random function.)

function getRandomAr(myArray) {
  var r = Math.floor((Math.random()) * (myArray.length));
  console.log(myArray.length)
  console.log('r is ' + r);

  return myArray[r];
}
console.log('The whole array is ' + myArray);
console.log(getRandomAr(myArray));


// count occurrences of a character in a string
//
// Write a function that takes two strings, the second with just one character.
//  Return the number of times the character is found in the first string.
//  For example, for inputs "Rubber baby buggy bumper"  and "b",
//  return 6. (You will need the string charAt method to retrieve the individual characters of the string.)

function cntChar(myString, myChar) {
  var cnt = 0
  for (i = 0; i < myString.length; i++) {
    if (myChar === myString.substr(i, 1)) {
      cnt = cnt + 1;
    }
  }
  return cnt;
}
var s = 'This is a string';
console.log('String is ' + s + ' count how many is are ' + cntChar('This is a string', 'i'));
console.log('String is ' + s + ' count how many xs are ' + cntChar('This is a string', 'x'));
console.log('String is ' + s + ' count how many Ts are ' + cntChar('This is a string', 'T'));


// most repetitions of a character
//
// Write a function that takes a string and returns an object with
// the character which is repeated most and the number of times it is repeated.
// In the event of a tie, return all characters together in one string.
// For example, given the string "aabbbccdddeeff", return the object {chars: "bd", count: 3}.


function repeats(myString) {
  var counts = {};
  for (var i in myString) {
    var ch = myString[i];
    if (ch in counts) {
      counts[ch]++; // counts[ch] = counts[ch] + 1;
    } else {
      counts[ch] = 1;
    }
  }
  var max = 0;
  var maxChars = [];
  for (var ch in counts) {
    if (counts[ch] > max) {
      max = counts[ch];
      maxChars = [ch];
    } else if (counts[ch] === max) {
      maxChars.push(ch);
    }
  }
  return {
    chars: maxChars.join(''),
    count: max
  };
}

console.log('repeats in string of strings ')
console.log(repeats('string of strings'));
console.log('repeats in tiptoe through the tulips');
console.log(repeats('tiptoe through the tulips'));
console.log('repeats in ssssiiiitttkkk');
console.log(repeats('ssssiiiitttkkk'))


// // join together arrays within an array
// // Write a function that takes an array of arrays and returns a new array which
// is the concatenation of all the arrays. For example, given input [[4, 2, 5], ["h
// i", 8], [], [8, 9, 1, 4]], return the array [4, 2, 5, "hi", 8, 8, 9, 1, 4].
// (This can be done with the array concat method and the
// // function apply method, but try it first without using these methods.)

function newArray(inArr) {
  var outArr = [];
  for (var i = 0; i < inArr.length; i++)
    if (typeof(inArr[i]) == "object") {
      //  console.log('object type found');
      for (var j = 0; j < inArr[i].length; j++) {
        var arr = inArr[i];
        outArr.push(arr[j]);
      }
    }
  return outArr;
}

console.log(newArray([
  [1, 2, 3],
  [90, 32, "hi"],
  [],
  ['bye']
]));


// palindromes
//
// Write a function that takes a string and returns true if the
// string is a palindrome and returns false if not. The test should
// not be case sensitive. We consider empty strings (strings with no characters)
// and strings with only a single character to be palindromes.
// For example, the following strings are palindromes:
//
// "ABCCBA"
// "%good doog%"
// "f"
// ""
// "RaceCar"
function isPalindrome(inString) {
  var back = "";
  if (inString == null) {
    inString = " ";
    back = " ";
  }
  var str = inString.toUpperCase();
  for (var i = (str.length - 1); i > -1; i--) {
    back = back + str[i];
  }
  if (back == str) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome('ABCCBA'));
console.log(isPalindrome('RaceCar'));
console.log(isPalindrome(''));
console.log(isPalindrome("nope"));

// title case
//
// Write a function that, given a string, returns a new string with the text in 'title case'.
// For example, given the string "I like pizza.", return the string `"I Like Pizza.".


function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

console.log(titleCase("I like pizza"));
console.log(titleCase(" how do i feel About javascript"));
