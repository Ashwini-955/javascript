// immediately invoked function expression iife
(function print(){
    console.log("hello")
})();
// this is the syntax to directy call  the function 
// global scope variables often cause the polution , to avoid that we use iife
// always use semicolon to end the iife function 
((name)=>{
    console.log(`${name} is my username`)
})("ashu")
