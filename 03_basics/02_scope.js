// so lets learn about the scope , there are two types of scope local and global 
// scope means {} in programming language that we use in if , else and functions . 
//code inside {} has loacl scope and outside is global scope 

if(true){
    const a=1
    let b=2
    var c =3
}
// console.log(a) // this line will give error a not defined
// console.log(b) // this also

console.log(c) // it will print c outside although it in inside local scope , 
// this is wrong and cause ambiguity in code
// var does not support the local and global scope concept and can be used outside so
//  it is not good practice to use it 

//*********************************nested scope********************************************************* */

//child function can acces the parent functions variables but parent cannot access chils function variable
function parent(name){
    const parentname="parent"
    console.log("i am parent function")
    function child(name){
        const childname="child"
        console.log(`I am child function of ${parentname} function`)
    }
    // console.log(childname)  ReferenceError: childname is not defined error 
    child()
}
parent()