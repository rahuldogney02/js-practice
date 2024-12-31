const arr = [5,1,3,2,8,9];
/**
 * Transformation of array it means if you want  to transform each and every value of Array and get a new array of it.
 * 
 *  */ 
// Double - [ 10, 2, 6, 4, 16, 18 ]

// new to pass () function in it it's tell you to transform do we need ? (double) its should be a function.

function doubleArr(twiceAllElement){
    return twiceAllElement * 2;
}
const arrDouble = arr.map(doubleArr);
console.log(arrDouble);
//  [ 10, 2, 6, 4, 16, 18 ]

function findGreaterThenFive(greaterFive){
    return greaterFive > 5
}
console.log(arr.map(findGreaterThenFive))
// [ false, false, false, false, true, true]

// Binary ["101", "1", "11", "10", "110"];
const arrBinary = [5,1,3,2,6];

function binary(x){
    return x.toString(2);
}
const binaryNum = arrBinary.map(binary);
console.log(binaryNum);

// triple the array elements

const tripleArr = arrBinary.map((x)=>{
    return x * 3;
})

console.log(tripleArr);

console.log(arrBinary.map((x)=> x*3));