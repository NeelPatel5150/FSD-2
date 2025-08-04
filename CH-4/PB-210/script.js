// write an express js to link html , css and js file and show one image o.jpg. And
// also show the description of image. 

var exp = require('express')
var app = exp()

app.use(exp.static(__dirname))
app.listen(1004)
