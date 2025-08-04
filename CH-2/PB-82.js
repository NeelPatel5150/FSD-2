// Write a program to demonstrate various methods of path module in Node.js

path = require("path")
x = "C:/Coding/FSD-PB/CH-1/hello.txt"
console.log(path.basename(x))  // Output: hello.txt
console.log(path.dirname(x))  // Output: C:/Coding/FSD-PB/CH-1
console.log(path.extname(x))  // Output: .txt
console.log(path.parse(x).root)  // Output: C:/
console.log(path.parse(x).name)  // Output: hello
console.log(path.parse(x).ext)  // Output: .txt
