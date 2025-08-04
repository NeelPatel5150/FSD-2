// Write a script to define an array of 2 JSON objects named emp having
// members id, name, year. Create a RESTful API to fetch and retrieve details of
// specific object by providing "id" on URL. Write all necessary files.Note: Upon
// passing id on the browser url it should display the content having that id. (i.e.
// on localhost:4000/api/101)


var exp = require('express')
var app = exp()

var api = require('./api')

app.use('/api', api)
app.listen(1111)
