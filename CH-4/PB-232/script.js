// Write an express.js script to load an HTML file having username and email
// and submit button. On clicking submit button. It should jump on "/std" page
// using "GET" method. If username is "student" and email id is
// “student@gmail.com”, then jump on next middleware to print "hello student",
// if username and email fields are not matched, then stay on same middleware to
// print "warning msg" in red color. Note: no need to write HTML file

var exp = require('express');
var app = exp();

app.use(exp.static(__dirname))

app.get('/std', function (req, res, next) {
    var name = req.query.name
    var email = req.query.mail

    res.set('Content-type', 'text/html')
    
    if (name == "student" && email == "student@gmail.com") {
        next()
    } else {
        res.send(`<b style='color:red'>Warning</b>`)
    }
})

app.get('/std', (req, res)=>{
    res.send('Hello Student')
})

app.listen(1012)
