//set timeout and set interval in javascript
// //setTimeout is a function that executes a function after a specified number of milliseconds.
// //setInterval is a function that executes a function repeatedly after a specified number of milliseconds.
// //setTimeout is used to delay the execution of a function.

logKaro = () =>{
    console.log("I am your log")
}
setTimeout(logKaro, 1000);

clr = setInterval(logKaro,1000); //used to cancel setInterval/setTimeout
