// Write a code snippet to configure the multer middleware to store uploaded files
// in a specific directory called "uploads"
const multer = require('multer');

var exp = require('express')
var app = exp()

app.use(exp.static(__dirname))
app.use(exp.urlencoded({extended:false}))

var store = multer.diskStorage({
    destination : 'uploads',
    filename : function(req, file, cb){
        cb(null, file.originalname) 
    }
})

var upload = multer({storage : store})

app.post('/upload', upload.array('mypic', 5), (req, res)=>{
    var file = req.files
    
    if(file){
        res.set('Content-type', 'text/html')
        for(i of file){
            res.write(`File ${i.originalname} has been uploaded successfully <br>`)
        }
    }
    res.send()
})

app.listen(9000)
