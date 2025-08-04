// Perform the following tasks as asked:
// 1) Create a HTML file for response form and this file should be loaded on
// home(‘/’) page.
// •Fields are : Name, Email and Submit button.
// 2) Once Response is submitted, message “Thank you for your response.” Will
// be displayed on page ‘/response’ and also send mail to the entered email id
// with the submitted response.

var exp = require('express')
var app = exp()

app.use(exp.static(__dirname))
app.use(exp.urlencoded({extended:false}))

var nm = require('nodemailer')

app.post('/response', (req, res) => {
    var email = req.body.mail
    var trans = nm.createTransport({
        host : 'smtp.gmail.com',
        port : 465,
        auth : {
            user : email,
            pass : 'ebnq lcbv qzjq krvm'
        }
    })

    var mailoption = {
        from : email,
        to : email,
        subject : 'Emnem j ichaa thai atle',
        html : 'Hello'
    }

    trans.sendMail(mailoption, (err, info) =>{
        if(err){
            console.log(err)
        } else {
            console.log(info)   
        }
    })

    res.send('Thank you for your response')
})


app.listen(1890)
