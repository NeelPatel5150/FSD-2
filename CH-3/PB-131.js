// Write a node.js script to print query string of URL on console as well as on file using ES6
// Callback
fs = require("fs")
url =  require("url")

var addr = "http://localhost:8080/xyz.html?name=karan&age=21"

addr = url.parse(addr)

q = addr.query

console.log(q)

fs.appendFile('output.txt', q + "\n", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Data written to file")
    }
})
