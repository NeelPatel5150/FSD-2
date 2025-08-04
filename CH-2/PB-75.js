// Write a Node.Js program to sort an interger array, where all element are
// available in a file separated by white space. Print sorted array elements on
// node.js server.

fs = require("fs")
http = require("http")

data = fs.readFileSync("array.txt", "utf-8")
arr = data.split(" ")
sort_arr = arr.sort((a,b)=>(parseInt(a)-parseInt(b)))

http.createServer(function(req,res){
    res.writeHead(200 , {"Content-Type": "text/html"});
    res.write("Original array: "+ data + "<br>");
    res.write("Sorted array: "+ sort_arr + "<br>");
    res.end()
}).listen(8180);
