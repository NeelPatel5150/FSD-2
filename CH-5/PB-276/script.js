// Write an express JS script to upload any type of file of size up to 50KB only

var exp = require('express')
var multer = require('multer')

var app = exp()

app.use(exp.static(__dirname))
app.use(exp.urlencoded({extended:false}))

var store = multer.diskStorage({
    destination : 'smallfiles',
    filename : function(req, file, cb){
        cb(null, file.originalname)
    }
})

var upload = multer({storage:store, limits:{fileSize:50}})

app.post('/upload', upload.single('file'), (req, res)=>{
    res.send('File uploaded successfully')
})
app.listen(2332)
