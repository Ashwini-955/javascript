console.log("check for null")
console.log(null>0) // comparator <,> converts null into number that is 0 and ans is false as zero is not greater than zero
console.log(null==0) //false null is not equal zero
console.log(null>=0) // comparator <,> converts null into number that is 0 then compare it while = does not .
console.log("check for undefined")
console.log(undefined>0) // always gives false 
console.log(undefined==0)
console.log(undefined>=0)
//===is strict check it checks value as well as data types.
console.log("strict check")
let num=1
let num1="1"
let num2="abc123"
console.log(num==num1)//true
console.log(num===num1)//false
console.log("converting a string to number")
let num3=Number(num2)
console.log(typeof nums)//though it is convervet to num but it will show undefined 
console.log(num3)// it will give not an number nan because abs123 is not proper number thought it is converted to number

