// Write an express.js script to define 2 pages. 1st page has username and
// password. Store this username to cookie on 2nd page. Cookie must stay live
// for 1 day

var exp = require('express')
var app = exp()

var cp = require('cookie-parser')
app.use(cp())

oneday = 1000*60*60*24

app.get('/', (req, res)=>{
    username = 'Hetansh'
    password = '12345'
})

app.get('/save', (req,res)=>{
    res.cookie('username', 'Hetansh', {maxAge: oneday})
    res.send()
})

app.listen(1008)
