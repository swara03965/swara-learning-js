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