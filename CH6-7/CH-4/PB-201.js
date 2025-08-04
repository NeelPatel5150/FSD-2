// Write an express.js script to define one JSON array of 3 objects having
// members name and age. Names must be sorted according to age. If user
// requests “sorted Names” URL, then all names should be printed according to
// ascending order of age.

var exp = require('express')
var app = exp()

studs = [
    { name: 'John', age: 20 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 15 }
]

app.get('/', (req, res) => {
    res.send(studs)
})

app.get('/sorted', (req, res)=>{
    studs.sort((a, b) => (a.age - b.age))
    res.send(studs)
})

app.listen(1000, () => {
    console.log("Server Started");
})


