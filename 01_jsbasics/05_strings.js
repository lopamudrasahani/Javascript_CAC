const name = "Lopamudra";
const age = 30;
console.log(name + age + " Developer");

//By using String Interpolation
// Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation 
// with embedded expressions, and special constructs called tagged templates.
// syntax from MDN

// `string text`

// `string text line 1
//  string text line 2`

// `string text ${expression} string text`

// tagFunction`string text ${expression} string text`

console.log(`MY name is ${name} and my age is ${age}`);
console.log(`MY name is ${name.toUpperCase()} and my age is ${age + 5}`);

const gameName = new String("hitesh-hc-com");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); //8 (Returns the length of a String object. )
console.log(gameName.toUpperCase()); //HITESHCH (Converts all the alphabetic characters in a string to uppercase.)
console.log(gameName.charAt(5)); //h (Returns the character at the specified index.) 
console.log(gameName.indexOf("t")); //2 (Returns the position of the first occurrence of a substring.) 

// The substring() method swaps its two arguments if indexStart is greater than indexEnd , 
// meaning that a string is still returned. The slice() method returns an empty string if this is the case.we can give -ve value in both methods but subString method won't obey that value

const newString = gameName.substring(0,4);//Returns the substring at the specified location within a String object.The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned.
console.log(newString);//hite

// const newString = gameName.substring(-8,4);//Returns the substring at the specified location within a String object.The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned.
// console.log(newString);//hite

const anotherString = gameName.slice(-8,4);//Returns a section of a string
console.log(anotherString);//ite

const newStringOne = "       hitesh                 ";
console.log(newStringOne);
console.log(newStringOne.trim());//Removes the leading and trailing white space and line terminator characters from a string.

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20","-"));//Replaces text in a string, using a regular expression or search string.
console.log(url.includes("com"));//Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

console.log(gameName.split(" "));//[ 'hitesh', 'hc', 'com' ]
