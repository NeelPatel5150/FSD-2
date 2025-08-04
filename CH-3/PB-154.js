//  .
// "https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllThe
// Best"
// 1) Data must be written as below in file named “exam.txt”. File name must be fetched from
// the url given above.
// Output:
// Hello!
// Welcome to LJU FSD2 T1 Test
// #AllTheBest
// 2) Read content from file “exam.txt” and send response to server and display data in “/” page
// in same format as above but in H1 tag and in red color.
// 3) If any other page is requested it shows “Page not found” message in plain text

var url = require('url')
var fs = require('fs')
var http = require('http')

addr = 'https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest'

data = url.parse(addr,true)
d1=data.query.c1
d2=data.query.c2
d3=data.query.c3
d4=data.hash
data1 = d1 +"!\n"+d3+" "+d2+"\n"+d4

console.log(data1)
fs.writeFileSync('.'+data.pathname,data1)

http.createServer((req,res)=>{
    if(req.url=='/'){
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
                <h1 style="color:red"><pre>${data2}<pre></h1>
            </body>
            </html>`)
            res.end()
    }
    else{
        res.write('Page not found')
        res.end()
    }
}).listen(8080)
