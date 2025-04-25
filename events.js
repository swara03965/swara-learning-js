//events in javscript
function clicked() {
console.log("Button clicked");
}

// //Event is an action that occurs in the browser, such as a mouse click, key press, or page load. Events can be used to trigger JavaScript code, allowing developers to create interactive web applications. Events can be handled using event listeners, which are functions that are executed when a specific event occurs. Event listeners can be added to HTML elements using JavaScript, allowing developers to respond to user interactions and create dynamic web pages. Events are a fundamental part of web development and are essential for creating responsive and interactive user interfaces.
//document.onload

window.onload = function() {
    console.log("Page loaded");
}

let prevHTML = document.querySelectorAll(".click me")[1].innerHTML;
firstcontainer.addEventListener("click", function() {
    document.querySelectorAll("container")[1].innerHTML = "<b>We have clicked</b>";
    console.log("Container clicked");
})

firstcontainer.addEventListener("mouseout", function() {
    console.log("Mouse out container");
})

firstcontainer.addEventListener("mouseover", function() {
    console.log("Mouse over container");
})

