var exp = require('express')
var app = exp()

var router = exp.Router()

const emp = [
    {id : 101, name : "Alice", year : 2025},
    {id : 102, name : "Bob", year : 2023},
    {id : 103, name : "Charlie", year : 2025},
    {id : 104, name : "David", year : 2025},
    {id : 105, name : "Eve", year : 2024}
]

router.get('/id/:id', (req, res)=>{

    var emp1 = emp.filter((i)=>(i.id == req.params.id))
    
    if(emp.length >= 1){
        res.send(emp1)
    } else {
        res.send('No data found')
    }
})

module.exports = router
