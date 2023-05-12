// // //Do the below programs in arrow function

// //a.print all odd numbers in array

// let array = [20,40,35,6,7,8,2,12,4,79]
// let oddNumbers = array.filter(n => n%2  != 0)
// console.log(oddNumbers)


// //b. Convert all string to title caps in a string in array

// let string = "hello guvi im also a guvian";
// let newString = string.split(' ')
//    .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
//    .join(' ');
// console.log(newString);


// //c.Sum of all numbers in an array

// let numbers = [45, 34, 12, 10, 8, 9]
// let sum     = numbers.reduce((a, b) => a + b, 0);
// console.log(sum)


// d.Return all the prime numbers in an array

// const newArray = [23,7,5,2,4,78,5,59,,32,31,71];
// const isPrime = num => {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return num !== 1;
// };
// const myPrimeArray = newArray.filter(element => isPrime(element));
// console.log(myPrimeArray);


//  Return all the palindromes in an array


// const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);

// console.log(getAllPalindromes(["hello", "noon"]));




