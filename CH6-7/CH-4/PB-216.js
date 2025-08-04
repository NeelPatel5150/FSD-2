// Write an express.js script to define one JSON array of 3 objects having
// members name and age. If user requests “maxName” URL, then only the
// details of oldest person should be displayed.

var exp = require('express')
var app = exp()

members = [
    {name : 'John', age : 19},
    {name : 'Alice', age : 21},
    {name : 'Bob', age : 17},
]

members.sort((a,b)=>(b.age-a.age))

app.get('/maxName', (req, res) => {
    res.send(members[0])
})
app.listen(1007)
