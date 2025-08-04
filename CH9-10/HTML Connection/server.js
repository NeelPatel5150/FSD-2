var expr=require("express") 
var app=expr() 
const mg=require("mongoose") 
 
mg.connect("mongodb://127.0.0.1:27017/login") 
.then(()=>{console.log("Successful")}) 
.catch((err)=>{console.error(err)}) 
 
mg.pluralize(null) 
const myschema=new mg.Schema({ 
        uname:{type:String, required:true}, 
        password: {type:String, required:true} }) 
const person =new mg.model("data1", myschema) 
 
app.use(expr.static(__dirname,{index:"form.html"})) 
 
app.get("/process_get",async (req,res)=>{ 
       const personData=new person({ 
       uname:req.query.uname, 
       password:req.query.pwd 
}) 
await personData.save() 
res.send("Record inserted") 
}) 
app.listen(6000) 

// In terminal node task.js 
// In browser localhost:6000