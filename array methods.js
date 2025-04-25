//array methods in javascript
let myArr = ["fan", "camera", 34, null, true];
console.log(myArr.length); //length property is used to get the number of elements in an array.
console.log(myArr[0]); //indexing is used to access the elements of an array.           
console.log(myArr[1]); 
console.log(myArr[2]); 
console.log(myArr[3]); 
console.log(myArr[4]); 

myArr.pop(); //pop method is used to remove the last element of an array.
console.log(myArr);

myArr.push("swara"); //push method is used to add an element at the end of an array.
console.log(myArr);

myArr.shift(); //shift method is used to remove the first element of an array.
console.log(myArr);

myArr.unshift("pawar"); //unshift method is used to add an element at the beginning of an array.
console.log(myArr);

myArr.toString(); //toString method is used to convert an array to a string.
console.log(myArr);

const newLength = myArr.length;
console.log(newLength); //length property is used to get the length of an array.
console.log(myArr);

myArr.splice(0, 2); //splice method is used to add or remove elements from an array.
console.log(myArr); 
myArr.splice(0, 0, "swara", "pawar"); //it adds 2 elements at index 0.
console.log(myArr); 


myArr.sort();
console.log(myArr); //sort method is used to sort the elements of an array in  order.ascending


myArr.reverse(); //reverse method is used to reverse the elements of an array.
console.log(myArr); 

myArr[0] = "swara"; //indexing is used to access the elements of an array.
console.log(myArr[0]); 
    
myArr.concat(["hello", "world"]); //concat method is used to join two or more arrays.
console.log(myArr); 


