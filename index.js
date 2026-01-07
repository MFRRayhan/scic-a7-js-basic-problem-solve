/*
Problem 1: Reverse a String
Write a function that takes a string and returns it reversed.
Example:
•	Input: "hello"
•	Output: "olleh"
*/
function reversedString(str) {
  return str.split("").reverse().join("");
}

console.log(reversedString("hello"));

/*
Problem 2: Count Vowels in a String
Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
Example:
•	Input: "programming"
•	Output: 3
*/
function vowelCount(str) {
  const vowels = "aeiou";
  let count = 0;

  for (const letter of str) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
}

console.log(vowelCount("programming"));
/*
Problem 3: Check for Palindrome
Write a function that checks if a string is a palindrome (reads the same forward and backward).
Example:
•	Input: "madam"
•	Output: true
•	Input: "hello"
•	Output: false
*/

function isPalindrome(str) {
  const reverse = str.split("").reverse().join("");
  return str === reverse;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
/*
Problem 4: Find the Maximum Number
Write a function that takes an array of numbers and returns the largest number.
Example:
•	Input: [5, 1, 9, 3]
•	Output: 9
*/
function findMaxNum(arr) {
  return Math.max(...arr);
}

console.log(findMaxNum([5, 1, 9, 3]));
/*
Problem 5: Remove Duplicates from an Array
Write a function that removes all duplicate numbers from an array.
Example:
•	Input: [1, 2, 2, 3, 4, 4]
•	Output: [1, 2, 3, 4]
*/
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
/*
Problem 6: Sum of All Numbers in an Array
Write a function that returns the sum of all numbers in an array.
Example:
•	Input: [1, 2, 3, 4]
•	Output: 10
*/
function sumOfArray(arr) {
  return arr.reduce((prev, cur) => prev + cur, 0);
}

console.log(sumOfArray([1, 2, 3, 4]));
/*
Problem 7: Find Even Numbers in an Array
Write a function that returns all even numbers from a given array.
Example:
•	Input: [1, 2, 3, 4, 5, 6]
•	Output: [2, 4, 6]
*/
function evenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6]));
/*
Problem 8: Capitalize First Letter of Each Word
Write a function that capitalizes the first letter of each word in a string.
Example:
•	Input: "hello world"
•	Output: "Hello World"
*/
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world"));
/*
Problem 9: Find the Factorial of a Number
Write a function that calculates the factorial of a number using a loop.
Example:
•	Input: 5
•	Output: 120
*/
function factorial(num) {
  if (num < 0) return null;
  let result = 1;

  for (let i = 1; i <= num; i++) {
    // result = result * i;
    result *= i;
  }

  return result;
}

console.log(factorial(5));
/*
Problem 10: PingPong Challenge
Write a function that prints numbers from 1 to 20.
Example:
•	For multiples of 3, print "Ping"
•	For multiples of 5, print "Pong"
•	For multiples of both 3 and 5, print "PingPong"
•	If the number is not a multiple of 3 or 5, print the number itself
Example Output:
•	1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..
*/
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

pingPong();
