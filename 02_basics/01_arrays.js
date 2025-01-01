//Array Methods Part1:: push, pop, unshift, shift, includes, indexOf, slice, splice, concat, spread operator to join two arrays, isArray, from

//shallow copy of an object is a copy whose properties share the same references 
//Deep copy of an object is a copy whose properties do not share the same references

//create an array Using an array literal
const myArr =[6,7,8,9,10];
const myHeros = ["maa","bapa"];
console.log(myArr);

//create an array Using the JavaScript Keyword new
 const myArr2 = new Array(11,12,13,14,15);

 //Array methods

 myArr.push(11);//Appends new elements to the end of an array, and returns the new length of the array.
 console.log(myArr);

 myArr.pop();//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
 console.log(myArr);

 myArr.unshift(5);//Inserts new elements at the start of an array, and returns the new length of the array.
 console.log(myArr);

 myArr.shift();//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
 console.log(myArr);

 console.log(myArr.includes(9));//Determines whether an array includes a certain element, returning true or false as appropriate.
 console.log(myArr.indexOf(5));//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

 const newArr = myArr.join();//Adds all the elements of an array into a string, separated by the specified separator string.
 console.log(myArr, newArr, typeof newArr);//[ 6, 7, 8, 9, 10 ] 6,7,8,9,10 string

 //slice, splice
console.log("A ", myArr);//A  [ 6, 7, 8, 9, 10 ]

// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
// @param start: The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
// @param end: The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
const myn1 = myArr.slice(1,3);
console.log(myn1);//[ 7, 8 ]
console.log("B ", myArr);//B  [ 6, 7, 8, 9, 10 ]

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// @param start — The zero-based location in the array from which to start removing elements.
// @param deleteCount — The number of elements to remove.
// @returns — An array containing the elements that were deleted.
const myn2 = myArr.splice(1,3);
console.log(myn2);//[ 7, 8, 9 ]
console.log("c", myArr);//c [ 6, 10 ]






