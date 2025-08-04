// Write express js script to load student form using pug file which contains
// following fields Name(text) Email(email) Course(radio : CE, IT, CSE) Once
// form submitted then data must be displayed on ‘/data’ page using pug file.
// Means data should be submitted from express application to PUG file

var exp = require('express')
var app = exp()

app.set('view engine', 'pug')

app.get('/', (req, res)=>{
    res.render(__dirname + '/index')
})

app.get('/data', (req, res)=>{
    res.render(__dirname + '/data', {name: req.query.name, email: req.query.mail, course: req.query.course} )
})

app.listen(5600)
