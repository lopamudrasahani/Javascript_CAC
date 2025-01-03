let myDate = new Date();//new Date(date string) creates a date object from a date string:
console.log(myDate); // 2025-01-03T14:04:07.545Z
console.log(myDate.toString()); //toISOString() method converts a date to a string using the ISO standard
console.log(myDate.toDateString()); // toDateString() method converts a date to a more readable format
console.log(myDate.toISOString()); // toISOString() method converts a date to a string using the ISO standard:
console.log(myDate.toJSON()); // 2025-01-03T14:04:07.545Z
console.log(myDate.toLocaleDateString()); // 1/3/2025
console.log(myDate.toLocaleString()); // 1/3/2025, 2:04:07 PM
console.log(myDate.toLocaleTimeString()); // 2:04:07 PM

// let myCreatedDate = new Date(2025, 1, 1);
// let myCreatedDate = new Date(2025, 1, 1, 5, 3);
// let myCreatedDate = new Date("2025-10-10");
let myCreatedDate = new Date("10-10-2025");
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));

