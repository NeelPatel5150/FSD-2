// Write node.js script to print “Welcome Admin” on home page of server. If
// user request for second page it display “This is second page” in italic fontstyle and if any other request is requested it shows “Page not found”
// message.

http = require("http")


server = http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' })
    
    if (req.url == '/') {
        res.write("Welcome Admin")
    } else if (req.url == '/second') {
        res.write("<i>This is second page</i>")
    } else {
        res.write("Page not found")
    }
    res.end()
})

server.listen(3000, function () {
    console.log("Server is running on port 3000")
})
