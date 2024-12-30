// array

const myArray = [3,5,"test",3.2]
console.table([myArray]); 

// Shallow copy of an object is a copy whose properties share the same refrences (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or copy, you may end up unintentionally causing changes to the source or copy that you don't expect.
// Deep copy of an object is a copy whose properties DO NOT share the same refrences (point to the same underlying values) as those of the source object from which the copy was made. 


const myArr2 = new Array(1,6,4,2,8);
console.table([myArr2]);

// Array methods

// push
myArrMethods = [2,4,6,7,8,9,"rahul"];
// myArrMethods.push("rahul")
let testArrValue = myArrMethods.push("test") // its taking any argumnet
console.log(myArrMethods);
console.log("Push : its lenth of arry after push =>",testArrValue); // whatever the last element push from the array its return that total array length.

// pop
testArrValue = myArrMethods.pop() // its not taking any argumnet
console.log(myArrMethods); // its pop or remove the last element of the array
console.log("Pop : ",testArrValue); // whatever the last element remove from the array its return that element.

// unshift

const testUnshiftArr = [3,9,4,2,7,1,8];
testUnshiftArr.unshift(5); // added font of the array, Issue is shifting whole values.
console.log(testUnshiftArr);
let testUnValue = testUnshiftArr.unshift(6);
console.log(testUnshiftArr , testUnValue); // return stored value is Length of Array

// shift

const testShiftArr = [3,9,4,2,7,1,8];
console.log(testShiftArr);
testShiftArr.shift(3); // added font of the array, Issue is shifting whole values.
console.log(testShiftArr);
// let testSValue = testShiftArr.shift(6);
// console.log(testShiftArr); // return stored value is Length of Array

let arryIs = [4,2,1,3,5];
console.table([arryIs.includes(71), arryIs.includes(4)]);
console.table([arryIs.indexOf(71), arryIs.indexOf(5)]);

let arrJoin =  [2,4,5,6,7,8,9]// Add all the elements of an array into a string, seprateed by the specified separator.
let newArrJoin = arrJoin.join()
console.table([arrJoin.join(), `${typeof arrJoin}  ${arrJoin.join()}` , ` by using arrJoin.join() :- ${typeof newArrJoin}  ${newArrJoin}`]);


// slice 
const myArrLice = [0,1,2,3,4,5,6,7];
/*
Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
@param start
The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
@param end
The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
*/
console.log("Orignal myArrLice A:-", myArrLice);
const myS1 = myArrLice.slice(1,5);
console.log("slice myArrLice (1,5) :",myS1); //  its r
console.log("B",myArrLice);
// splice
const mySp1 = myArrLice.splice(0,3);
console.log("C", myArrLice);
console.log("splice myArrLice (0,3) :",mySp1);

/*
output

┌─────────┬───┬───┬────────┬─────┐
│ (index) │ 0 │ 1 │ 2      │ 3   │
├─────────┼───┼───┼────────┼─────┤
│ 0       │ 3 │ 5 │ 'test' │ 3.2 │
└─────────┴───┴───┴────────┴─────┘
┌─────────┬───┬───┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │
├─────────┼───┼───┼───┼───┼───┤
│ 0       │ 1 │ 6 │ 4 │ 2 │ 8 │
└─────────┴───┴───┴───┴───┴───┘
[ 2, 4, 6, 7, 8, 9, 'rahul', 'test' ]
Push : its lenth of arry after push => 8
[ 2, 4, 6, 7, 8, 9, 'rahul' ]
Pop :  test
[
  5, 3, 9, 4,
  2, 7, 1, 8
]
[
  6, 5, 3, 9, 4,
  2, 7, 1, 8
] 9
[
  3, 9, 4, 2,
  7, 1, 8
]
[ 9, 4, 2, 7, 1, 8 ]
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ false  │
│ 1       │ true   │
└─────────┴────────┘
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ -1     │
│ 1       │ 4      │
└─────────┴────────┘
┌─────────┬─────────────────────────────────────────────────────┐
│ (index) │ Values                                              │
├─────────┼─────────────────────────────────────────────────────┤
│ 0       │ '2,4,5,6,7,8,9'                                     │
│ 1       │ 'object  2,4,5,6,7,8,9'                             │
│ 2       │ ' by using arrJoin.join() :- string  2,4,5,6,7,8,9' │
└─────────┴─────────────────────────────────────────────────────┘
Orignal myArrLice A:- [
  0, 1, 2, 3,
  4, 5, 6, 7
]
slice myArrLice (1,5) : [ 1, 2, 3, 4 ]
B [
  0, 1, 2, 3,
  4, 5, 6, 7
]
C [ 3, 4, 5, 6, 7 ]
splice myArrLice (0,3) : [ 0, 1, 2 ]
*/
