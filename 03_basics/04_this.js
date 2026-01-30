// this is used to show the current contenxt of the object 
const user={
    username:"ashu",
    age:20,
    welcome : function(){
        console.log(`${this.username} u are here!!!!!!!`)
        console.log(this) // this will print all the context present inside this object
    }
}
user.welcome()
user.username="ajay"
user.welcome()
console.log(this) // it will print the context present in this block 
// in browser the global object is window so if u print this it will show all the browser objects
// this is used only in the objects not in the function 