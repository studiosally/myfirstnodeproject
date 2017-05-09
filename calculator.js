// # Calculator Node

// Create a app.js that require another file called calculator.js When we call node app.js we should show in the console the following:

// The sum of 3 & 7 is: 10
// The multiplication of 3 & 7 is: 21
// app.js should only show in the console the result of calling the functions sum & multiplication

// These methods should be defined (and exported) in calculator.js

module.exports.sum = function sum (a,b) {
	console.log( a + b )
    }

module.exports.multiplication = function multiplication(a,b) {
	console.log(a * b)
    }

 
