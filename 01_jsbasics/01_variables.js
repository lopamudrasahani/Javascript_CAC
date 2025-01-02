const accountId = 1000000;
let accountEmail = "ls@gmail.com";
var accountPassword = "lslp1";
accountCity = "Bangalore";
let accountState;

// accountId = 1200000;
// console.log(accountId);//error not allowed

accountEmail = "bnsjsls@gmail.com";
accountPassword ="bnsjsls2090";
accountCity ="hyderabad";
accountState = "Telangana";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// Variables and Data Types
// const = can't be re-assigned a value and can't be declared again  (block scope)
// let = can be re-assigned a value but can't be declared again (block scope)
// var = it can be re-assigned a value and it can also be declared again  (Global scope)

// => Never use var in your code instead of let because of block and functional scope issues.
// # console.table([group of variables you want to show in tabular form])

