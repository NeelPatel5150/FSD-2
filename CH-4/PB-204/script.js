// write a sript to meet foll requirements.
// 1) create index.html page and open it on localhost
// 2) after clicking submit button, it should jump to savesessionpage.store
// username in session.
// 3) After saving session, redirect to fetchsession page and read session value.
// put a logout link button here.
// 4) destroy the session on this page and redirect to index.html

var exp = require('express')
var app = exp()

var sess = require('express-session')
app.use(sess({
    secret:'jaadu',
    saveUninitialized:false,
    resave:false
}))

app.use(exp.static(__dirname))

app.get('/savesession', (req, res)=>{
    req.session.uname = req.query.uname
    req.session.pass = req.query.pass
    res.redirect('/fetchsession')
})

app.get('/fetchsession', (req, res)=>{
    res.send(`<h2>Welcome ${req.session.uname}</h2> <br> <a href='/deletesession'>Logout</a>`)
})

app.get('/deletesession', (req, res)=>{
    req.session.destroy()
    res.redirect('/')
})

app.listen('1003', ()=>{
    console.log('server is running on port 1003')
})
