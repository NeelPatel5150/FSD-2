// Write express js script to perform tasks as asked below.
// 1. Create one HTML file which contains two number type input fields, one
// dropdown which contains options to select like (addition, subtraction,
// multiplication, division) and one submit button.
// 2. The input fields must contain the value greater than 0 else it will give a
// message “Please enter the valid number”. Also, user must select any type of
// formula from the dropdown else give a message “You have not selected any
// formula”. (Message will be displayed on “/calc” page.)
// 3. If one formula is selected and numbers are entered then Both numbers
// should be stored in cookies which expires in 50 seconds. Respective
// calculations will be performed on the page “/calc”.

var exp = require('express')
var app = exp()

app.use(exp.static(__dirname))
app.use(exp.urlencoded({extended:false}))

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.post('/calc', (req, res)=>{
    var num1 = parseFloat(req.body.num1)
    var num2 = parseFloat(req.body.num2)
    var opr = req.body.operation
    if(num1 <= 0 || num2 <= 0){
        res.send("Please enter the valid number")
    }
    else if(opr == ""){
        res.send("You have not selected any formula")
    }
    else{
        
        res.cookie('num1', num1, {maxAge: 50000})
        res.cookie('num2', num2, {maxAge: 50000})

        if(opr == 'add'){
            res.send(`Ans : ${num1+num2}`)
        } else if(opr == 'sub'){
            res.send(`Ans : ${num1-num2}`)
        } else if(opr == 'mul'){
            res.send(`Ans : ${num1*num2}`)
        } else if(opr == 'div'){
            res.send(`Ans : ${num1/num2}`)
        }
    }
})

app.listen(1010)
