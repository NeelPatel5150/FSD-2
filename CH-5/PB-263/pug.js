// write a code to create a link named “Contact Us” using a Pug template engine
// inside Express code. When you click on “Contact Us” it will redirect to the
// next page “/contact” and display the message “welcome to Contact us page”.

var expr = require("express");
var app = expr();

app.set("view engine","pug");

app.get("/",(req,res)=>{
    res.render(__dirname +"/main")
});

app.get("/contact",(req,res)=>{
    res.write("<h1>Welcome to contact us page</h1>");
    res.send();
});

app.listen(6783);
