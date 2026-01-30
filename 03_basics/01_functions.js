function add(num1,num2){
    console.log(num1+num2)
}
add// this will just give reference to funtion 
console.log("addition result")
add(2,5) // this will call the function and print it 
const result=add(5,4) 
console.log(result)// this will not give the addition because we have not return a value so it will give undefined 
console.log("multiplication result")
 function mul(num1,num2){
    return num1*num2
 }
 const res =mul(3,5)
 console.log(res)