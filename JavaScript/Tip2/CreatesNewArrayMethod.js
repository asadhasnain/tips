/**
 * Map — returns a new  array by iterating each element and modifying them based on a provided function.
 */


 const numbers = [1, 2, 3, 4, 5, 6];
 const result = numbers.map(n => n * 2); // [2, 4, 6, 8, 10, 12]

 console.log(result);

 /**
 * filter — returns a new array that contains only those elements which filtering function returns true
 */

  const filteredNumbers = numbers.filter(n => n % 2 === 0); // [2, 4, 6]
 
  console.log(filteredNumbers);

/**
 * flat — returns are new array - in case of nested array it moves all of them to one level higher. You can also specify the nested depth.
 */

 const nestedNumbers = [1, 2, 3, 4, [5, 6]];

const flatNumbers = nestedNumbers.flat();  // [ 1, 2, 3, 4, 5, 6 ]
console.log(flatNumbers);

/**
 * Slice — returns a new array based on provided range (StartIndex, EndIndex), the provide start index is included but end index is not.
 */

const slicedNumber = numbers.slice(2,4);  // [ 3, 4 ]
console.log(slicedNumber);  

/**
 * join — returns a new string by concatenating elements with provided separator
 */

 const joinedNumber = numbers.join("-");
 console.log(joinedNumber);
 

/**
 * reduce — returns the value of accumulated function result.
 */

 const sum = numbers.reduce((prev, next) => { 
    console.log(prev, next);
    return prev + next;
});
 console.log(sum);