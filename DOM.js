//document object model
// The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate the content and structure of web pages dynamically. The DOM provides methods and properties to access and modify elements, attributes, and styles in HTML and XML documents. It enables interaction with the browser, allowing developers to create dynamic and interactive web applications.
// The DOM is a crucial part of web development, as it allows developers to create responsive and interactive user interfaces. It is supported by all modern web browsers and is a key component of JavaScript programming for the web.

console.log(document.body); //document object is used to access the HTML document.
console.log(document.body.innerHTML); //innerHTML property is used to get or set the HTML content of an element.
console.log(document.body.innerText); //innerText property is used to get or set the text content of an element.

console.log(document.body.childNodes); //childNodes property is used to get the child nodes of an element.

console.log(document.body.firstChild); //firstChild property is used to get the first child node of an element.

console.log(document.body.lastChild); //lastChild property is used to get the last child node of an element.

let myElement = document.getElementById("myElement"); //getElementById method is used to get an element by its id.
console.log(myElement); //it returns the element with id myElement.

let elemclass = document.getElementsByClassName("myClass"); //getElementsByClassName method is used to get elements by their class name.
console.log(elemclass); //it returns the elements with class myClass.