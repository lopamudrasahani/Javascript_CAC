//Array Methods:: push, pop, unshift, shift, includes, indexOf, slice, splice, concat, spread operator to join two arrays, isArray, from

const marvel_heros = ["thor","ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);
console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

marvel_heros.concat(dc_heros);
console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const allHeros = marvel_heros.concat(dc_heros);//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(allHeros);//thor,ironman,spiderman,superman,flash,batman,superman,flash,batman

//how to convert two arrays into one array
const all_new_heros = [...marvel_heros,...dc_heros];
console.log(all_new_heros);//thor,ironman,spiderman,superman,flash,batman,superman,flash,batman


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray("lopamudra"));//false
console.log(Array.from("lopamudra"));//['l', 'o', 'p', 'a', 'm', 'u', 'd', 'r', 'a']Creates an array from an iterable object.
console.log(Array.from({name:"lopamudra"}));//[] 

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]Returns a new array from a set of elements.



