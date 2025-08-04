// Process a form using post method. Form has fields like username, password,
// confirm password, gender, submit and reset buttons. After entering all fields, If
// password and confirm password matches, then form should be processed and
// all relevant and selected fields’ values should be printed. Otherwise, by
// printing warning message in red color, it should terminate. No need to write
// file having form elements.

var exp = require('express');
var app = exp();

app.use(exp.urlencoded({ extended: false }));
app.use(exp.static(__dirname));

app.post('/submit', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;
    var gender = req.body.gender;

    res.set('Content-Type', 'text/html');

    if (password === confirmPassword) {
        res.write(`<p>Username: ${username}</p>`);
        res.write(`<p>Password: ${password}</p>`);
        res.write(`<p>Gender: ${gender}</p>`);
    } else {
        res.write("<p style='color:red'><b>Warning: Password and Confirm Password do not match.</b></p>");
    }

    res.end(); // Use res.end() instead of res.send() when using res.write()
});

app.listen(1001, () => {
    console.log("Server is running on port 1001");
});
