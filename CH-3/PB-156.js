// Create HTTP webpage on which Home page display “Welcome to Log in page” in blue color and
// font size must be 32px, Login page shows one HTML file from static URL having Form with
// detail for Username, Password, submit and reset button, Gallery page reflect one Image
// “hello.jpg” and any other page shows “Page Not found”.
// Write all necessary files to perform task. (Image already exist in same folder)

var url = require('url')
var fs = require('fs')
var http = require('http')

addr='http://localhost:8080/test.html'

http.createServer((req,res)=>{
    if(req.url=='/home'){
        res.writeHead(200,{'content-type':'text/html'})
        data2 = fs.readFileSync('exam.txt','utf-8')
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1 style="color:blue;font-size:32px">Welcome to Log in page</h1>
            </body>
            </html>`)
            res.end()
    }
    else if(req.url=='/login'){
        res.writeHead(200,{'content-type':'text/html'})
        p = url.parse(addr,true)
        data = fs.readFileSync('.'+p.pathname,'utf-8')
        res.write(data)
        res.end()

    }
    else if(req.url=='/gallery'){
        res.writeHead(200,{'content-type':'image/png'})
        res.write('image4.png')
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.write('Page not found')
        res.end()
    }
}).listen(8080)
