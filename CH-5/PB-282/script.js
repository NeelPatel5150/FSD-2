// Write an express js script to configure the multer middleware. Perform
// following tasks.
// 1) Create a html form file named "form.html" in public folder. This file contain
// centrally oriented heading(h3) "Upload your File" in red color with backgroundcolor aqua. 
// Along with choose file option(to browse and select file) and submit
// button(to upload the file). (Must use external css having name “effect.css” in
// public folder)
// 2) Create a js file to show result after uploading any type of file, message
// should be displayed on "/upload" page "(file original name) has been
// uploaded".(Css effect must include while running js code)
// 3) Save uploaded files to specific directory named "File". And in this folder file
// must be stored in format of "data-file.pdf" where "data" is the field name.

var exp = require('express')
var multer = require('multer')
var app = exp()

app.use(exp.static('public'))
app.use(exp.urlencoded({extended:false}))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/form.html')
})

var store = multer.diskStorage({
    destination : 'File',
    filename : (req, file, cb)=>{
        cb(null, file.fieldname + '-file.pdf')
    }
})

var upload = multer({storage : store})
app.post('/upload', upload.single('data'), (req, res)=>{
    res.send(`
        <html>
            <head><link rel="stylesheet" href="effect.css"></head>
            <body>
                <h3>${req.file.originalname} has been uploaded</h3>
            </body>
        </html>
    `);
})

app.listen(7423)
