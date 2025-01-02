console.log( 2 > 1);
console.log( 2 >= 1);
console.log( 2 < 1);
console.log( 2 == 1);
console.log( 2 != 1);

//diff between js and typescript is in TS you can't compare two different datatypes
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
// Note: the reason is that an equality check(==) and comparisions (>,>=,<,<=) work differently
// comparisions converts null to a number , treating it as 0,
// that's why  null >=0 is true and null > 0 is false

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

//*****************************strict equality check === (checking both value and datatypes)*************************
console.log("2" === 2);//false



