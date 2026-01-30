// this cannot be used in the function  and arrow function both 
function hello(){
    const name ="ashu"
    console.log(`${this.name}`) // undefined
    console.log(this) //default global objects name 
}
hello() // it will give undefined because this do not work inside function  
console.log("arrow function***************************************************************")
const hello2 =()=>{ // this is basic arrow function
    console.log(this)//empty 
}
hello2()

///////////////////////////////////////////////////////////////////////////////////////////////////
console.log("arrow function without {} and return statement")
const add =(num1,num2)=>(num1+num2)
console.log(add(2,3))
//note:it is compulsory to use return statement if u use {}

const print=()=>({username:"ashu"})
console.log(print())