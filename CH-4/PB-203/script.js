// write an express.js script to load an HTML file having username and password
// and submit button. On clicking submit button. It should jump on "check" page
// using "POST" method. If username is "admin" , then jump on next middleware
// to print "welcome… admin" , if username is not "admin" , then stay on same
// middleware to print "warning msg" in red color

var exp = require('express')
var app = exp()

app.use(exp.static(__dirname))
app.use(exp.urlencoded({extended : false}))

app.use('/check', (req, res, next)=>{
    var username = req.body.username
    var password = req.body.password
    
    if(username == 'admin'){
        next()    
    } else { 
        res.write(`<b style='color:red'>Warning message</b>`)
    }
    res.send()
})

app.post('/check', (req,res)=>{
    res.write(`Welcome Admin`)
    res.send()
})

app.listen(1002, ()=>{
    console.log('Server is running on port 1002')
})

