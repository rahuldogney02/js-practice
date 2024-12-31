const arrFilterValue = [5,1,3,2,6];
// Filter the value based on the some logic | Filter the odd values

function isOdd(x){
    return x % 2;
}
const oddFilter = arrFilterValue.filter(isOdd);
console.log(oddFilter);

function isEven(xx){
    return xx % 2 === 0;
}
const evenFilter = arrFilterValue.filter(isEven);
console.log(evenFilter);

const greaterEqualThree = arrFilterValue.filter((x)=> x >= 3);
console.log(greaterEqualThree);