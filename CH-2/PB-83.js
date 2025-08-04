// Write a node.js script to jump on a specific code by specifying path on
// address bar of browser. 

http = require("http")


server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    if (req.url == '/admin') {
        res.write("Welcome Admin")
    } else if (req.url == '/user') {
        res.write("Welcome User")
    } else {
        res.write("Page not found")
    }
    res.end()
})

server.listen(3000, function () {
    console.log("Server is running on port 3000")
})
