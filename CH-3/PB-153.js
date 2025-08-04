// Write a node.js script using Event handling to perform following tasks in sequence:
// a) Create file in it named abc.txt and enter data into it.
// b) Append data to that file abc.txt and print message “Data Appended Successfully”.
// c) Read the content of the file abc.txt and print the content on http web server.
// d) Do all the operations of File using asynchronous file system module. And Lastly print the
// message “All operations performed successfully” on console.

var EventEmitter = require('events')
var ee = new EventEmitter()
var fs = require("fs")
var http = require("http")

ee.on("create", () => {
    fs.writeFile("abc.txt", "Hello World", (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("File created successfully")
            ee.emit("append")
        }
    })
})

ee.on("append", () => {
    fs.appendFile("abc.txt", " Data Appended", (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Data Appended Successfully")
            ee.emit("read")
        }

    })
})

ee.on("read", () => {
    fs.readFile("abc.txt", (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            http.createServer((req, res) => {
                res.writeHead(200, { 'Content-Type': 'text/plain' })
                res.write(data.toString())
                res.end()
            }).listen(3000, () => {
                console.log("Server is running on port 3000")
            })
        }
        ee.emit("end")
    })
})

ee.on("end", () => {
    console.log("All operations performed successfully")
})
ee.emit("create")
