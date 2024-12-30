const arrString = ["Thor", "Ironman", "Spiderman"];
const dcStirng = ["superman","flash","batman"];

// array of array
arrString.push(dcStirng)
console.log(arrString);
console.log(arrString[3][1]);
console.table([arrString]);
/*

[ 'Thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
flash
┌─────────┬────────┬───────────┬─────────────┬───────────────────────────────────┐
│ (index) │ 0      │ 1         │ 2           │ 3                                 │
├─────────┼────────┼───────────┼─────────────┼───────────────────────────────────┤
│ 0       │ 'Thor' │ 'Ironman' │ 'Spiderman' │ [ 'superman', 'flash', 'batman' ] │
└─────────┴────────┴───────────┴─────────────┴───────────────────────────────────┘
*/

/* 
arrString.concat(dcStirng);
console.log(arrString); 

Like this not working Here we want to assign this into another variable then its work.

┌─────────┬────────┬───────┬───────┬───────┬───────┬───────┬───────┬───────┬──────────┐
│ (index) │ 0      │ 1     │ 2     │ 3     │ 4     │ 5     │ 6     │ 7     │ Values   │
├─────────┼────────┼───────┼───────┼───────┼───────┼───────┼───────┼───────┼──────────┤
│ 0       │ 'test' │ 'box' │ 'pen' │ 'cup' │ 'rat' │ 'cow' │ 'pig' │ 'hen' │          │
│ 1       │        │       │       │       │       │       │       │       │ 'object' │
└─────────┴────────┴───────┴───────┴───────┴───────┴───────┴───────┴───────┴──────────┘
*/ 

const a = ['test', 'box', 'pen', 'cup'];
const b = ['rat', 'cow', 'pig', 'hen'];
const arrConcat = a.concat(b);
console.table([arrConcat , typeof arrConcat]);

/*
Diffrent way of catination is "Spread Operator" : ...valribale
*/
const x = ['test', 'box', 'pen', 'cup'];
const y = ['rat', 'cow', 'pig', 'hen'];
const arrSpread = [...x,...y];
console.table([arrSpread , typeof arrSpread]);

// Flat array : convert into array of arrary subarray into single array

const arrFlat = [1,2,3,4,5,[6,7,8],[9,10,11,[12,13]]];
const realFlat = arrFlat.flat(Infinity);
console.log(arrFlat);
console.log(realFlat, typeof realFlat);
console.log(Array.isArray(realFlat));

/*
(method) ArrayConstructor.from<any, any>(iterable: Iterable<any> | ArrayLike<any>, mapfn: (v: any, k: number) => any, thisArg?: any): any[] (+3 overloads)
Creates an array from an iterable object.
@param iterable — An iterable object to convert to an array.

@param mapfn — A mapping function to call on every element of the array.

@param thisArg — Value of 'this' used to invoke the mapfn.
*/

const arrFrom = {
    id:20,
    emailId:"Rahul"
}
console.log(Array.from(arrFrom.emailId)); // convert only strig to Array

let score1 = 100;
let score2 = 200;
let score3 = 300;
/*
(method) ArrayConstructor.of<number>(...items: number[]): number[]
Returns a new array from a set of elements.

@param items — A set of elements to include in the new array object.
*/
console.log(Array.of(score1,score2,score3));

/*
Output
[ 1, 2, 3, 4, 5, [ 6, 7, 8 ], [ 9, 10, 11, [ 12, 13 ] ] ]
[
   1, 2, 3,  4,  5,  6,
   7, 8, 9, 10, 11, 12,
  13
] object
true
[ 'R', 'a', 'h', 'u', 'l' ]
[ 100, 200, 300 ]
*/