//variables
console.log("Hello, World!");
console.log("This is a test file.");
fullname =  "swara pawar";
grade = "1st year";
console.log(fullname);
console.log(grade); 

//Function in javascript
//DRY - Do not repeat yourself
//Function is a block of code that performs a specific task.
//Function is a reusable code block that can be called multiple times.
//Function is a set of statements that perform a task.
//Function is a set of statements that perform a specific task.


function avg(a ,b) {
    return (a+b)/2;

}

c1 = avg(4,6);
c2 = avg(14,16);
console.log(c1,c2);

function cgpa(m1,m2,m3,m4,m5) {
    return (m1+m2+m3+m4+m5)/5;
}
m1 = 80;
m2 =70;
m3 = 79;
m4 = 98;
m5 = 78;
c = cgpa(m1,m2,m3,m4,m5);
console.log(c);

//conditionals in javascript
//if else statement
//if else statement is used to execute a block of code if the condition is true or false.

var age = 18;



age = 6;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
else if (age < 18) {
    console.log("You are not eligible to vote.");
}
else if (age == 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not e eligible to vote.");
}
console.log("End of ladder");

//loops in javascript 
//for loop
//for loop is used to execute a block of code a specific number of times.
//for loop is used iterate over a block of code a number of times.

var arr = [1,2,3,4,5,6,7,8,9,10];
for (var i =0;i<arr.length; i++) {
    console.log(arr[i]);
    if(i == 2) {
        break; //break statement is used to exit the loop.
        //continue; //continue statement is used to skip the current iteration and continue with the next iteration.
    }

}


//for Each loop is used to iterate over the elements of an array.
arr.forEach(function(element){
    console.log(element);
})


//while loop
//while loop is used to execute a block of code as long as the condition is true.
let i = 0;
while(i < arr.length) {
    console.log(arr[i]);
   i++;
}

//do while loop
//do while loop is used to execute a block of code at least once and then repeat the loop as long as the condition is true.
do {
    console.log(arr[i]);
    i++
}
while(i < arr.length);