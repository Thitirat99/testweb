const array = [20,19,18,17,16]
function reducer(accumulator,currentValue,index){
    const returns = accumulator + currentValue;
    console.log(
    `accumulator: ${accumulator},currentValue: ${currentValue},index: ${index},returns: ${returns} `,);
    return returns;
}

array.reduce(reducer);