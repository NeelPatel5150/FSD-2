var exp = require('express')
var app = exp()

app.set('view engine', 'pug')
app.get('/', (req, res)=>{
    res.render(__dirname+'/index')
})

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})
