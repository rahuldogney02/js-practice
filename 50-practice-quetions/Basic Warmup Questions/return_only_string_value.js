
function returnOnlyStringValue(arr) {

    return [arr.filter(terms => typeof terms === 'string'), console.log("checking",arr)];
}

const array = [1, 2, 3, 'a', 'b', 'c'];
console.log(returnOnlyStringValue(array));