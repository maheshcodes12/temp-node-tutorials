setTimeout(() => {
	console.log("setTimeout is async method");
}, 0);
setInterval(() => {
	console.log("setInterval is async method");
}, 1000);
console.log("Hello people");

//nodemon is used for testing purposes
// js file is executed on web nd terminal each time you save it.
