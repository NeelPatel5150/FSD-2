// Write a Node.js program to CRUD operation of file management.
// 1)Create folder named "Hello".
//  2) Create file in it named abc.txt and enter data in to it.
// 3) Add more data at last in file.
// 4) Read data without getting buffer data at first.
// 5) rename file
// 6) Delete both file and folder.

fs = require('fs')

fs.mkdirSync('Hello')

fs.writeFileSync('Hello/abc.txt', 'Hello World')

fs.appendFileSync('Hello/abc.txt', ' This is Node.js')

console.log(fs.readFileSync('Hello/abc.txt', 'utf-8'))

fs.renameSync('Hello/abc.txt', 'Hello/xyz.txt')

fs.unlinkSync('Hello/xyz.txt')

fs.rmdirSync('Hello')

console.log('File and folder deleted')
