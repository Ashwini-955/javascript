const array =[1,2,3,4]
const intialValue =0
const newarr =array.reduce((accumulator,currentValue)=>accumulator+currentValue,intialValue);
console.log(newarr)
const total=array.reduce(function(acc,curr){
    console.log(`acc is ${acc} and curr value is ${curr}`)
})
console.log(total)
// here we have initial value then in accumulator intial value will get stored , then after the calculation 
//of accumulator and current value their sum will get store in acummulator , accumulator will keep 
//updating itself with the new sum value
