// # Calculator Node

// Create a app.js that require another file called calculator.js When we call node app.js we should 
//show in the console the following:

// The sum of 3 & 7 is: 10
// The multiplication of 3 & 7 is: 21
// app.js should only show in the console the result of calling the functions sum & multiplication

// These methods should be defined (and exported) in calculator.js


// var sayHi = require('./greeting.js').sayHi
// var sayBye = require('./greeting.js').sayBye

// sayHi()
// sayBye()

// hay que poner './ cuando pedimos el archivo desde local, para cuando se pide un modulo solamente se hace sin './' 


var sum = require('./operations/sum.js').sum
var multiplication = require('./operations/multiplication.js').multiplication
var substraction = require('./operations/substraction.js').substraction
var division = require('./operations/division.js').division



sum(3,7)
multiplication(3,7)
substraction(3,7)
division(3/7)

var today = require('moment')
console.log(today().format('MMMM Do YYYY, h:mm:ss a'))
