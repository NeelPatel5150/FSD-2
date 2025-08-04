// write a code to create a link named “About Us” using a Pug template engine
// inside Express code.when you click on “About Us” it will redirect to the next
// page “/about” and display the message “welcome to About us page”

var exp = require('express')
var app = exp()

app.set('view engine', 'pug')
app.get('/', (req, res)=>{
    res.render(__dirname + '/index')
})

app.get('/about', (req, res)=>{
    res.send('Welcome to About us page')
})

app.listen(7689)
