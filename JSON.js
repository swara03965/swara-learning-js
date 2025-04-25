//JSON in js
//JSON is a data format that is used to exchange data between a server and a client
//JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is based on a subset of the JavaScript programming language and is often used in web applications to transmit data between a server and a client. JSON is language-independent and can be used with many programming languages, making it a popular choice for data exchange in web development. JSON is often used in conjunction with AJAX (Asynchronous JavaScript and XML) to create dynamic web applications that can update content without reloading the entire page.

obj = {name: "swara" , age : "19", location : "navi mumbai"}
js = JSON.stringify(obj) //stringify method is used to convert a JavaScript object into a JSON string.
console.log(js) 

JSON.parse(js) //parse method is used to convert a JSON string into a JavaScript object.
console.log(JSON.parse(js)) //it returns the object {name: "swara" , age : "19", location : "navi mumbai"}

JSON.stringify(obj, null, 4) //stringify method is used to convert a JavaScript object into a JSON string with indentation of 4 spaces.
console.log(JSON.stringify(obj, null, 4)) 