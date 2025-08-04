// write an express.js script to make one index.html file in this file we write
// simple heading tag and make one css file index.css put style using appropriate
// selector and link with js file and show output on localhost:3030.

var exp = require('express')
var app = exp()

app.use(exp.static(__dirname))

app.listen(3030, ()=>{
    console.log("server is running on port 3030")
})
