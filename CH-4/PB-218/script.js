// Write an expressJS code which loads login.html file upon browsing
// localhost:3010. The Login.html file contains input for username,password and
// two checkboxes named remember and subscribe,on submitting the file it
// should go to /data page where username,password and selected checkboxes
// are pinted,in addition to that a logout button should be there,onclicking this
// button it should go back to home page “localhost:3010/”.(GET/POST any
// method can be used)[Write all necessary files code]

var exp = require('express')
var app = exp()

 app.use(exp.static(__dirname))

app.get('/data', (req, res)=>{
    res.set('Content-type', 'text/html')
    res.write(`Username : ${req.query.username}<br>`)
    res.write(`Password : ${req.query.password}<br>`)
    res.write(`Remember Me : ${req.query.remember}<br>`)
    res.write(`Subscription : ${req.query.subscribe}<br>`)
    res.write(`<a href='/'>Logout</a>`)
    res.send()
})

app.listen(1009)
