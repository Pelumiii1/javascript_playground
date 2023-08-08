//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

function capitalizeWords(str) {
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const capitalizedStr = capitalizedWords.join(" ");
  return capitalizedStr;
}

//Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.

function findLongestWord(str) {
  const words = str.split(" ");
  const longestWord = words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
  return longestWord;
}

//Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  if (number <= 3) {
    return true;
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

//Write a JavaScript function that accepts an argument and returns the type.
function getType(value) {
  return typeof value;
}

//Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.

function findSecondLowestAndGreatest(numbers) {
  if (numbers.length < 2) {
    return "Not enough numbers to find second lowest and second greatest.";
  }

  const sortedNumbers = numbers.slice().sort((a, b) => a - b);
  const secondLowest = sortedNumbers[1];
  const secondGreatest = sortedNumbers[sortedNumbers.length - 2];

  return {
    secondLowest,
    secondGreatest,
  };
}
