const arrReduce = [5,1,3,2,6];
 
// A reduce function is used a place where you have to take a element of array and comeup with the single value out of them.

// sum or max
function findSum(arr){
    sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arrReduce));


// Reduce is iterate this fun() over each and every value of the array.
// curr -> represent the values like 5,1,3,2,.... 
// acc -> accumulate -> means like i itterator inside for loop
// all value and find out the perticular value
const getSum = arrReduce.reduce((acc,current) => { // {curr is arr[i] , acc is sum}
    acc = acc + current;
    return acc;
},0);


function findMax(arr){
    let max = 0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arrReduce));
// function(acc, curr){} --->  this func call will be agenst the each and every value of the array. 
const getMax = arrReduce.reduce((max,curr) => { // {curr is arr[i] , acc is sum}
    if(curr > max){
        max = curr;
    }
    return max;
},0);

console.log(getMax);

const users = [
    {fname: "Rahul", lname: "Dogney", age:21},
    {fname: "Gopal", lname: "Tawar", age:24},
    {fname: "Manas", lname: "Singh", age:23},
    {fname: "Ajay", lname: "Pal", age:24},
]


// x=> inside map it's run agnst each of this value of the array
const output = users.map((x)=> x.fname + " " +x.lname);
console.log(output);
// [ 'Rahul Dogney', 'Gopal Tawar', 'Manas Singh', 'Ajay Pal' ]

// { 24:2, 23:1,21:1 }
// currect is itrrating each fun() particular obj : {fname: "Rahul", lname: "Dogney", age:21},
const findCount = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{})

console.log(findCount)

console.log(users)

// chaining

const valueChaining = users.filter((x)=> x.age > 23).map((x)=> x.fname);
console.log(valueChaining);