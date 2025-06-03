function lastElement(data){
    lastIndex = data[data.length-2];
    return lastIndex;
}

let elements = ['test',83,0.2,true,-1,{test:1}];

console.log(lastElement(elements));