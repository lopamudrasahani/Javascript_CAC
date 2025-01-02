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

//*********************Operations*************************/
// arithmatic operations: +,-,*,/,%

let str1 = "ls";
let str2 = "kl";
let str3 = str1 + str2;
console.log(str3);

console.log( 1 + "2");
console.log("1" + "2");
console.log(1 + 2 + "3");
console.log((3+4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;//prefix
console.log(gameCounter);
gameCounter++;//profix
console.log(gameCounter);

