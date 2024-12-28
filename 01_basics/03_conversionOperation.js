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