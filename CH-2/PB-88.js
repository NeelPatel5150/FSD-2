// Write a nodeJS script to print “My PC is on fire” on server at port no 5555 if
// having more than 4gb physical available memory otherwise,”I need more
// more memory” should get displayed.

os = require("os")
http = require("http")

mem = os.freemem()/1024/1024/1024

http.createServer(function (req, res) {

    res.writeHead(200, {"Content-Type": "text/plain"});

    if(mem > 4){
        res.write("My PC is on fire")
    } else {
        res.write("I need more memory")
    }
    res.end()
}).listen(5555)
