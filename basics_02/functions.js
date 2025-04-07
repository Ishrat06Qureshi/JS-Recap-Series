// function definition
function sayHello(name){
    console.log(`Hello ${name}`);
    
}
// sayHello()
// argument vs parameters
// values in the function definition is called parameters 
// values in the function calling is called arguments

//+++++++++++++++++++++++++++++++++++++++++++++++++
// Rest Operator
// use case : when we dont know the number of parameters , 
// it will combine the values in an array
function addCartValue(priceOne , priceTwo, ...params) {
    console.log(params)
 return priceOne + priceTwo
}
// addCartValue(4,5,400,800,456)
// args validation 
// Immediate return if falsy values are given
function loggedInUser(userName) {
    if(!userName){
        return
    }
 console.log(` Hi , ${userName} !Good Morning`)
}
loggedInUser(undefined)