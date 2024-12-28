// primitive and non-primitive or refrence datatype
// 7 Types : String, Number, Boolean, null empty means memory not alocated, undefind not-intialize means memory alocated but value not assigned, Symbole is used for making unique all values, BigInt sintific value. 

// Js is Dinamic type language

const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log( id === anotherId);
const bigNum = 3245374749384853n;
console.log(typeof bigNum , bigNum);

// In memory directly allocate refrence (non-primitive) type data type : Array, Object, Functions

const  fruites = ['apple', 'mango', 'greeps', 'banana'];
let myObj = {
    name: "rahul",
    age: 34
}
const myFunction = function(){
    return "Hello World"  
}
console.table([fruites, myObj, myFunction(),`'outSideTemp = null :-' ${typeof outSideTemp}`]);

// Refrence - https://262.ecma-international.org/5.1/#sec-11.4.3 typerOf
/*
false
bigint 3245374749384853n
┌─────────┬─────────┬─────────┬──────────┬──────────┬─────────┬─────┬──────────────────────────────────┐
│ (index) │ 0       │ 1       │ 2        │ 3        │ name    │ age │ Values                           │
├─────────┼─────────┼─────────┼──────────┼──────────┼─────────┼─────┼──────────────────────────────────┤
│ 0       │ 'apple' │ 'mango' │ 'greeps' │ 'banana' │         │     │                                  │
│ 1       │         │         │          │          │ 'rahul' │ 34  │                                  │
│ 2       │         │         │          │          │         │     │ 'Hello World'                    │
│ 3       │         │         │          │          │         │     │ "'outSideTemp = null :-' object" │
└─────────┴─────────┴─────────┴──────────┴──────────┴─────────┴─────┴──────────────────────────────────┘
*/