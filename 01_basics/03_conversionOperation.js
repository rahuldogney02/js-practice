let score = 33 // "rahul", false, null, undefinded

console.log(typeof score)

let valueInNumber = Number(score);
console.table([typeof valueInNumber , valueInNumber]);



/* 
output
number
┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ 0       │ 'number' │
│ 1       │ 33       │
└─────────┴──────────┘

    "33" => 33
    "33anbd" => NaN
    true => 1 ; false => 0;
 */

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);

let isOld = ""
let isNew = Boolean(isOld)

console.table([isLoggedIn,(isLoggedIn,typeof isLoggedIn) , typeof booleanIsLoggedIn, booleanIsLoggedIn , isOld ,isNew])

/*
isLoggedIn = 1 => true ,0 => false
isOld="" => false , "test" => true
┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ 1         │
│ 1       │ 'number'  │
│ 2       │ 'boolean' │
│ 3       │ true      │
└─────────┴───────────┘
*/



let someNumber = 47
let isStringConvert = String(someNumber)

console.table([someNumber ,isStringConvert, typeof isStringConvert])

/*
output

number
┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ 0       │ 'number' │
│ 1       │ 33       │
└─────────┴──────────┘
┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ 1         │
│ 1       │ 'number'  │
│ 2       │ 'boolean' │
│ 3       │ true      │
│ 4       │ ''        │
│ 5       │ false     │
└─────────┴───────────┘
┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ 0       │ 47       │
│ 1       │ '47'     │
│ 2       │ 'string' │
└─────────┴──────────┘
*/

// ######################### OPERATIONS ############################

let value = 3
let neg = - value

let str1 = "Hello"
let str2 = " World"


console.table([(`2+2 = ${2+2}`), (`2-2 = ${2-2}`), (`2*2 = ${2*2}`), (`2**3 = ${2**3}`), (`2/3 = ${2/3}`), (`2%3 = ${2%3}`),(str1+str2), (`1+"2" = ${1+"2"}`)]);
console.log("ToPrimtive (input[,preferredType])")
console.table([(`1+"2" = ${typeof (1+"2")} = ${1+"2"}`),(`"2"+1+6  = ${typeof ("2"+1+6)} = ${"2"+1+6}`),(`"2"+1+6  = ${typeof (1+6+3+"1")} = ${1+6+3+"1"}`)]);
console.log("incremet of true is 1 :-" , true , +true , -true); // true+ or false+ = error
console.log("decrement of false is 0 :-" , false, +false , -false);
console.log('+"" :- ',+"");

// output
// incremet of true is 1 :- true 1 -1
// decrement of false is 0 :- false 0 -0
/*
┌─────────┬────────────────────────────┐
│ (index) │ Values                     │
├─────────┼────────────────────────────┤
│ 0       │ '2+2 = 4'                  │
│ 1       │ '2-2 = 0'                  │
│ 2       │ '2*2 = 4'                  │
│ 3       │ '2**3 = 8'                 │
│ 4       │ '2/3 = 0.6666666666666666' │
│ 5       │ '2%3 = 2'                  │
│ 6       │ 'Hello World'              │
│ 7       │ '1+"2" = 12'               │
└─────────┴────────────────────────────┘
ToPrimtive (input[,preferredType])
┌─────────┬───────────────────────────┐
│ (index) │ Values                    │
├─────────┼───────────────────────────┤
│ 0       │ '1+"2" = string = 12'     │
│ 1       │ '"2"+1+6  = string = 216' │
│ 2       │ '"2"+1+6  = string = 101' │
└─────────┴───────────────────────────┘
*/

let gameCounter = 101;
++gameCounter;
console.log(gameCounter);
// +"" :-  0
// Refrence : https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion