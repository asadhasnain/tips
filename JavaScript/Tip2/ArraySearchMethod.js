

/**
 * Find method - returns the value of first element in provided array, fulfilling provided callback function
 */
const data = [1, 5, 12, 14, 5, 1];

const value = data.find(element => element === 5);

// Result = 5

console.log(value);

/**
 * Find method - returns the index of first element in provided array, fulfilling provided callback function
 */
const index = data.findIndex(element => element === 5);

console.log(index);

/**
 * Find method - returns the index of first element in provided array, fulfilling provided value
 */
const indexOf = data.indexOf(5);

console.log(indexOf);

/**
 * Find method - returns boolean as true if one of the value in array is fulfils the callback function
 */
 const some = data.some(element => element === 5);

 console.log(some);


 /**
 * Find method - returns boolean as true if all of the value in array is fulfils the callback function
 */
const every = data.every(element => element === 5);

console.log(every);


/**
 * includes method - returns boolean if provided value exists at least once in the array, 
 * Note: Difference from some method is here value is passed instead of callback
 */
const includes = data.includes(5);

console.log(includes);