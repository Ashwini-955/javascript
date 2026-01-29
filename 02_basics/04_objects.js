// object singleton *********************************************************************

const tinder =new Object() // singleton object
const User ={}// non singleton object , we can add key values inside it 
User.id=12
User.name="ashu"
User.gender="female";
console.log(User) 
// we will create 2 objects and want to merge both of them 
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj3 ={obj1,obj2} // add obj1 and obj2 as a data not their individual elements 
console.log(obj3)
const allobj= Object.assign(obj1,obj2) // this will  will add all elemnts independently
console.log(allobj)
const obj4 ={...obj1,...obj2} // this is best practice to add elements independently
console.log(obj4)
console.log(Object.values(obj4)) // print all the values
console.log(Object.keys(obj4))// print all the keys
console.log(obj4.hasOwnProperty('4')) // check the key is present or not 


