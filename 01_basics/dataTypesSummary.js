//JavaScript is dynamically typed. ✅
//You don’t declare variable types
// The type is decided at runtime
// A variable can change its type

//Data typess

// primitive 
// 7 types : Number , null. String , Boolean ,undefined,symbol(to make component unique),BigInt
let num =12
let name="ashu"
let islog =true
let gender;
// symbols 
const num1=Symbol("123")
const num2=Symbol("123")
console.log(num1===num2) // it will give false although both have same value because of symbol

// non primitive(reference )
// arrays , objects , function
const marks =[1,3,4,5]
console.log(marks)
let myobj={
    age:12,
    myname:"ashu"
}
console.log(myobj)
const myfunc=function(){
    console.log("hello");
}
console.log(myfunc)
// types of memory 
// stack : it creates the copy
// heap: it gives reference