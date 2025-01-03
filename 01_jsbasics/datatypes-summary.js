//primitive datatypes
//7 types: String, Number, Boolean, Symbol, Null, Undefined, BigInt
const name = "ls";

const score = 100;
//const score:number = 100; typescript
const scoreValue = 100.5;

const isLoggedIn = true;

const outsideTemp = null;
console.log(typeof outsideTemp);//object

let userEmail;
console.log(typeof userEmail);//undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);//false
console.log(typeof anotherId);//symbol

const bigNumber = 12345565676578797987908909n;
console.log(bigNumber, typeof bigNumber);//bigint


//Reference datatype or Non Primitive Datatype
//Array, Objects, Functions
const heros = ["shaktiman","batman","superman"];
console.log(typeof heros);//object

let person = {
    name:"ls",
    age:20
}
console.log(typeof person);//object

const myFunction = function(){ 
    console.log("Hello World!");
}
console.log(myFunction);//[Function: myFunction]


//**************************************stack memory and heap memory*********************************************
//stack(primitive datatype) and heap(non-primitive or reference datatype)

let myName = "ls";

let myGoodname = myName;//here myGoodname 'll get the copy of myName variable value i.e "ls"
myGoodname = "BNSJSLS";

console.log(myName);//ls
console.log(myGoodname);//BNSJSLS

let userOne = 
{
    email:"ls@gmail.com",
    job: "software developer"
}

let userTwo = userOne;//here userTwo'll get the same reference value of userOne

userTwo.email = "bnsjsls@gmail.com";

console.log(userOne.email);//"bnsjsls@gmail.com"
console.log(userTwo.email);//"bnsjsls@gmail.com"
