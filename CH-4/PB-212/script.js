// Write an ExpressJS to take a textarea & submit button. After clicking submit
// button the content of textarea should be represented on next page by writing
// each sentence (separated by dot) in new line.

var exp = require('express')
var app = exp()

app.use(exp.static(__dirname))

app.get('/submit', (req, res)=>{

    msg = req.query.msg

    l = msg.split('.')

    res.set('Content-type', 'text/html')

    for(i in l){
        res.write(`${l[i]} <br>`)
    }
    
    res.send()
})
app.listen(1005)
