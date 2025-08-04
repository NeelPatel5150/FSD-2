// Write a code to set up nodemailer in Express.js.
// Sender email id: “lju@gmail.com”.
// Receiver email ids: “student@gmail.com and faculty@gmail.com”.
// Mail subject should be “LJ University”
// Mail body contains “Welcome Student” in h3 tag and in table display data Date
// 28/06/23, Exam name FSD-2.

var nm = require('nodemailer')

var trans = nm.createTransport({
    host : 'smtp.gmail.com',
    port : 465,
    auth : {
        user : 'lju@gmail.com',
        pass : 'abcd efgh ijkl mnop'
    }
})

const mailOptions = {
    from: 'lju@gmail.com',
    to: ['student@gmail.com', 'faculty@gmail.com'], // Correct format
    subject: 'LJ University',
    html: `
        <h3>Welcome Student</h3>
        <table border="1" rules='all'>
            <tr>
                <th>Date</th>
                <th>Exam</th>
            </tr>
            <tr>
                <td>28/06/23</td>
                <td>FSD-2</td>
            </tr>
        </table>
    `
};

trans.sendMail(mailoption, (err, info)=>{
    if(err){
        console.log(err)
    }else{
        console.log(info)
    }
})
