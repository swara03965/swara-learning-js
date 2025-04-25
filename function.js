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


//function to find cgpa of 5 subjects
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


//Arrow function 
function sum(a,b) {
    return a+b;

}
sum = (a,b ) => {
    return a+b;
}