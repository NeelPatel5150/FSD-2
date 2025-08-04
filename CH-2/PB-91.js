// Create HTTP webpages where Admin page display “Sufficient Memory:” in
// bold blue color with font size of 24px along with available memory in GB
// with font size 32px and red color if available physical memory of the system
// is greater than 1 GB.
// Else it shows “Not Sufficient Memory” in simple text.
// For any other page requested then shows “You are not admin” message

os = require("os")
http = require("http")

mem = os.freemem()/1024/1024/1024

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});

    if(req.url == "/admin"){

        if(mem > 1){
            
            res.write("<b style ='color:blue; font-size:24px'>Sufficient Memory:</b> <br>");
            res.write("<b style ='color:red; font-size:32px'>Available Memory: " +  mem + " GB</b>");

        } else {

            res.write("Insufficient Memory")
        }
    }
    else{
        res.write("You are not admin")
    }
    res.end()
}).listen(3311)
