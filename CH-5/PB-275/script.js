// Write an express js script that allows only image type file to be uploaded using
// the multer middleware and saves the file to the specific directory called
// “IMAGES”. If file other than image has been uploaded then it will give an
// error message that “Upload only image file”. 

var exp = require('express')
var multer = require('multer')

var app = exp()

app.use(exp.static(__dirname))
app.use(exp.urlencoded({extended:false}))

var store = multer.diskStorage({
    destination: 'IMAGES',
    filename: function(req, file, cb){
        cb(null, file.fieldname)
    }
})

var upload = multer({storage:store, limits:{fileSize:10*1024*1024}})

app.post('/upload', upload.single('file'),function(req,res){
    if(req.file.mimetype == 'image/jpeg' || req.file.mimetype == 'image/png' || req.file.mimetype == 'image/jpg'){
        res.send('File uploaded successfully')
    }else{
        res.send('Upload only image file')
    }
})
app.listen(4444)
