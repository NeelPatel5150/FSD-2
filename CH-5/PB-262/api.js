
// Write an expressJS code in which RESTapi is created for json object named
// Places I love which contains name,country,state,city and rating out of 10(no
// decimal points) is given.upon passing ratings on the browser it should display
// the places having that rating.i.e. on localhost:30001/a/10 should display all the
// places having 10 ratings.

const exp = require('express')
const app = exp()

const router = exp.Router()

const data = [
    { name: 'Great Rann of Kutch', country: 'India', state: 'Gujarat', city: 'Kutch', rating: 10 },
    { name: 'Taj Mahal', country: 'India', state: 'Uttar Pradesh', city: 'Agra', rating: 9 },
    { name: 'Red Fort', country: 'India', state: 'Delhi', city: 'Delhi', rating: 8 },
    { name: 'Statue of Unity', country: 'India', state: 'Gujarat', city: 'Kevadia', rating : 10 },
    { name: 'Qutub Minar', country: 'India', state: 'Delhi', city: 'Delhi', rating: 9 }
]

router.get('/rating/:rating', (req, res)=>{

    var current_data = data.filter((i1)=>(i1.rating == req.params.rating))
    
    if(current_data.length >= 1){
        res.send(current_data)
    }
    else {
        res.send('No data found')
    }
})

module.exports = router
