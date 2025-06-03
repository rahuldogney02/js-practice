function CombinationOFArray(element1,element2){
    const byConcatinateFun = element1.concat(element2);
    // console.log(element1,element2);
    const bySpreadOperator = [...element1,...element2];
    // console.log(element1,element2);
    return byConcatinateFun, bySpreadOperator;
}

const element1 = ['India','Nepal','Bhutan','Lanka','Thiland'];
const element2 = [19824201,1213242,324442,4442,23232,'Terms'];

console.log(CombinationOFArray(element1,element2));