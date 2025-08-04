// Write a node.js script using event handling to consider an errorneous triangle to find area. Take
// fix values of all three sides.
// (1) If any of the side is negative, then print the message “Sides must be positive” using event
// handler.
// (2) If perimeter of triangle is negative then print the message “Perimeter must be positive” using
// event handler.
// (3) Both above messages must be printed in sequence.

var EventEmitter = require("events")
const ee = new EventEmitter()

ee.on('checkSides',(a,b,c)=>{
    if(a<0 || b<0 || c<0){
        console.log('Sides must be positive')
    }
})

ee.on('checkPerimeter',(h,b)=>{
    console.log('Perimeter : '+(0.5*b*h))
})

ee.emit('checkSides',1,2,-3)
ee.emit('checkPerimeter',2,2)
