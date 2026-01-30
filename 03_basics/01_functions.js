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

function islogin(username){
    if(!username){
        return `${username} is not valid, enter again`
    }
    return `${username} has just looged in`
}
console.log(islogin("Ashu"))
console.log(islogin())// if no arguement given then it will pass undefined as parameter 
//******************************** res operator******************************************** */
console.log("res operator or spead operator----------------------------------------------------")
function calculate(num1){
    return num1
}
console.log(calculate(200,400,500,600)) // now this will take 200 as parameter and return 200

function calculate1(...num1){ // here we use res or spead operator which will spread and bind
    return num1                //all elements in single array 
}
console.log(calculate1(200,300,400,500,600,700))
//******************************using objects in functions************************************* */
const user ={
    username:"ashu",
    age:20
}
function info(anyobj){
    return console.log(`Name is ${anyobj.username} and age is ${anyobj.age}`)
}
info(user)
// directly pass object without creating it 
info({
    username:"ajay",
    age:20
})