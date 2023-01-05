let values1 = ['Apple',1,false];
let values2 = ['fries',2,true];
let values3 = ['Mars',9,'Apple'];

let sumValue = values1.concat(values2.concat(values3))

for(let i = 0; i < sumValue.length; i++){
    for(let j = i+1;j < sumValue.length;j++)
    if(sumValue[i] ===  sumValue[j])
    console.log(sumValue[i] + "=" + sumValue[j]);
}
