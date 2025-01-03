const score = 400;
console.log(score);//400

const  balance = new Number(100);
console.log(balance);//[Number: 100]

console.log(balance.toString().length);// 3 (Returns a string representation of an object.)
console.log(balance.toFixed(2));//100.00 (Returns a string representing a number in fixed-point notation.)

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(2));//24  (Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.)
console.log(otherNumber.toPrecision(3));//23.9

// const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));//124

const hundreds = 1000000;
console.log(hundreds.toLocaleString());//1,000,000 (Converts a number to a string by using the current or specified locale.)
console.log(hundreds.toLocaleString('en-IN'));//10,00,000

//********************************************MATH*********************************************** */
console.log(Math);
console.log(Math.abs(-4)); //4  Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.
console.log(Math.round(4.3)); //4 Returns a supplied numeric expression rounded to the nearest integer.
console.log(Math.ceil(4.2)); //5 Returns the smallest integer greater than or equal to its numeric argument.
console.log(Math.floor(4.8)); //4 Returns the greatest integer less than or equal to its numeric argument.
console.log(Math.min(4,3,6,8)); //3 Returns the smaller of a set of supplied numeric expressions.
console.log(Math.max(4,3,6,8)); //8 Returns the larger of a set of supplied numeric expressions.

console.log(Math.random()); //Returns a pseudorandom number between 0 and 1.
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);





