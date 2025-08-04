// Write a nodeJS script to fire an event named calculate which calculates the total marks of 5
// subjects about of 25 marks and displays the total marks on console as an output.The calculate
// event fires another event name percentage which takes total marks as argument and percentage
// should get displayed in console.

var EventEmitter = require('events')
var ee = new EventEmitter()

marks = [25,24,23,22.5,22]

ee.on("calculate",()=>{
    var total = 0;
    for (var i = 0; i < 5; i++) {
        total = total + marks[i]
    }
    ee.emit("percentage", total)
})

ee.on("percentage", (total) => {
    var percentage = (total / 125) * 100

    console.log("Percentage is " + percentage)
    
    })
ee.emit("calculate")  // Trigger the event

