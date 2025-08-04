// write express script to maintain session and print how many times user visit
// the page. For ex., if user visit first time ,”you have visited page First time”
// message will print. if user visit second time ,”you have visited page second
// time” message will print. and so on

var exp = require('express')
var app = exp()

const ses = require('express-session') 

app.use(ses({
    secret:'LJU123',
    saveUninitialized:false,
    resave:false
}))

app.get('/', (req, res)=>{
    if(req.session.page_views){
        req.session.page_views++
        res.write(`You have visited page ${req.session.page_views} times`)
    }
    else{
        req.session.page_views = 1
        res.write(`You have visited page ${req.session.page_views} time`)
    }
    res.send()
})

app.listen(1357)







