//*********************Number Type Conversion************************* */
// let score = 33;
// let score = "33";
// let score = "33ewe";
// let score = null;
let score = undefined;

console.log(typeof score);
console.log(typeof (score));

let valueNumber = Number(score);
console.log(valueNumber, typeof valueNumber);

//"33" => 33
//"33abc" => NaN
//true:1,  false:0, 
// null:0, undefined:NaN

//*********************Boolean Type Conversion************************* */
// let isLoggedIn = 1; 
// let isLoggedIn = "";
let isLoggedIn = "ls";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1 => true, 0=> false
//"" => false
//"ls" => true

//*********************String Type Conversion************************* */
let someNumber = 34;

let stringNumber = String(someNumber);
console.log(stringNumber, typeof stringNumber);
