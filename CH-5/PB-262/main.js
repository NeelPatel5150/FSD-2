var exp = require('express')
var app = exp()

var api = require('./api')

app.use('/api', api)
app.listen(1212)
