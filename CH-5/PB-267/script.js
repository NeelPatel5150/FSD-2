// Create an Express.js route that accepts file uploads using the multer
// middleware and resizes and saves the uploaded image in multiple sizes (e.g.,
// small, medium, large) to a specific directory on the server.

const exp = require('express');
const multer = require('multer');

var app = exp()

app.use(exp.static(__dirname));
app.use(exp.urlencoded({extended:false}));

const store = multer.diskStorage({
    destination : 'multiple',
    filename : function(req, file, cb){
        cb(null, file.originalname);
    }
})

var upload = multer({ storage: store, limits:{fileSize:10*1024*1024} })

app.post('/upload', upload.array('image', 3), function(req, res){
    var file = req.files
    if(file){
        res.set('Content-type', 'text/html')
        for(i of file){
            res.write(`File ${i.originalname} has been uploaded successfully <br>`)
        }
    }
    res.send()
})
app.listen(8900)
