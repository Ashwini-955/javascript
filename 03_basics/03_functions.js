// console.log(add(5))  this will work
function add(num1){
    return num1;
}
console.log(add(5))
// another method to declare a function 

// console.log(addnum(6)) this will not work because addnum is a variable value declared later 
const addnum= function(num){
    return num
}
console.log(addnum(6))