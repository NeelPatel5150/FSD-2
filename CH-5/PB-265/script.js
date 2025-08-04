var multer = require('multer')

var exp = require('express')
var app = exp()

app.use(exp.static(__dirname))
app.use(exp.urlencoded({extended:false}))

var store = multer.diskStorage({
    destination: 'single',
    filename:function(req, file, cb){
        cb(null, file.fieldname+ ".jpeg")
    }
})

var upload = multer({storage:store})

app.post('/upload', upload.single('mypic'), (req, res)=>{
    const file = req.file
    if(file){
        res.send("<h1>File <span style='color:red'>'" + file.originalname + "'</span> has been uploaded in <span style='color:red'>" + file.destination + " </span>folder")
    }
})

app.listen(4200)
