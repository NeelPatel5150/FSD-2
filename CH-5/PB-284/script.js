// Write express JS script to pass data like message, name and id from express
// application to pug template in h1, h2 and h3 tags respectively and display data
// in browser.

var exp = require('express')
var app = exp()

app.set('view engine', 'pug')
app.get('/', (req, res)=>{
    var message1 = "This is h1 tag"
    var message2 = "This is h2 tag"
    var message3 = "This is h3 tag"
    res.render(__dirname + '/index', {msg1 : message1, msg2 : message2, msg3 : message3})
})

app.listen(4539)
