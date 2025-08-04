var nm = require('nodemailer')

var trans = nm.createTransport({
    host : 'smtp.gmail.com', //simple mail transfer protocol
    port: 465, //587
    auth : {
        user : 'hetanshpanchal12@gmail.com',
        pass : ''
    }
})

var mailoption = {
    from : 'hetanshpanchal12@gmail.com',
    to : 'hetanshpanchal12@gmail.com',
    Subject : 'My trial email',
    html : '<h1> Email body </h1>',
}

trans.sendMail(mailoption, (err, info)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log(info);
    }
})
