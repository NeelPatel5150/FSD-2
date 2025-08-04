// Write an ExpressJS to take a UserName, Password, Textarea for “message” &
// submit
// button using get method.
// 1) After clicking submit button the content of submitted details should be
// represented on “/login” page along with one “show vowel” link.
// 2) By clicking “show vowel” link count of vowel used in submitted “message”
// will display on “/message” page. (Use next() to route page)

var exp = require('express')
var app = exp()

app.use(exp.static(__dirname))

app.get('/login', (req, res, next)=>{
    res.set('Content-type', 'text/html')
    res.write(`Username :  ${req.query.name}<br>`)
    res.write(`Password : ${req.query.password}<br>`)
    res.write(`Message : ${req.query.message}<br>`)
    res.write(`<a href='/message?message=${encodeURIComponent(req.query.message)}'>Show vowels</a>`)
    res.end()
    next()
})

app.get('/message', (req, res)=>{
    var count = 0
    for(i in req.query.message){
        var ch = req.query.message[i].toLowerCase()
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
            count++
        }
    }
    res.send(`Total vowels used in message : ${count}`)
})

app.listen(1011)


