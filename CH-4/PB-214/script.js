// You have been assigned to develop a user feedback form for a website using
// Express.js and cookies. Implement the following requirements:
//  Process a form with the following fields: Name, Email , Message , Rating
// (radio buttons: Bad, Average, Good, Very Good, Excellent) When the user
// submits the form, store their feedback information (name, email, message, and
// rating) in a cookie named "feedback" that expires in 10 seconds. Display a
// confirmation message to the user after successfully submitting the form &
// Create a link to display the feedback details stored in the "feedback" cookie.
// When the user click to the link, retrieve the feedback information from the
// cookie and display it on the page also include a link on the feedback details
// page to Logout. When the user clicks the link, user redirected to home page.
// Make app.js file use get method in express js. No need to write html file having
// form elements.

var exp = require('express')
var app = exp()

app.use(exp.static(__dirname))
app.use(exp.urlencoded({extended : false}))

var cp = require('cookie-parser')
app.use(cp())

app.post('/submit', (req, res)=>{
    info = {
        'name' : req.body.name,
        'email' : req.body.mail,
        'message' : req.body.msg,
        'ratings' : req.body.rating
    }
    res.cookie('feedback', info, {maxAge:10000})
    res.send(`Thank you for submitting the feedback <br> <a href='/display-feedback'>Feedback Details</a>`)
})

app.get('/display-feedback', (req, res)=>{
    res.set('Content-type', 'text/html')

    var feed = req.cookies.feedback
    
    if(feed){
        res.write(`Feedback Info : ${JSON.stringify(feed)}`)
        res.write(`<br> <a href='/'>Logout</a>`)
    }
    res.send()
})

app.listen(1006)
