// object literals *************************************************************************************
const mysym=Symbol("mysym")
const obj={
    name: "Ashwini",
    age:20,
    gender:"female",
    marks:[89,98,90],
    [mysym]:"computer"
}
console.log(obj.age)
console.log(obj.gender)
console.log(obj.name)
console.log(obj.mysym)//undefined because not good syntax
console.log(obj[mysym])//give ans [] is the write syntax for symbol

// lets add function inside object 
obj.greet =function(){
    console.log("hello how are you")
}
console.log(obj.greet) // no error but function will not get executed it will show anomonys function
console.log(obj.greet()) // get execute
// if u dont wamt ur object to change further then freeze it 
Object.freeze(obj)
// after freezing if u try to change then it will not give any error but it will not change also 
obj.age=13 // this line will not change nor it will give ant error 
console.log(obj.age)


