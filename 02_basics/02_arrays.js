const a1=[1,2,3,4]
const a2=[5,6,7,8]
a1.push(a2)
console.log(a1)//this will add a2 array as a singlr object data 
const total =a2.concat(a1)//this will add a each and every element in other array indpendently
console.log(total)
const totalnum =[...a1,...a2]// this also concate independently
console.log(totalnum)
