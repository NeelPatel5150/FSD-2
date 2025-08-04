// Write a node.js script to create two listeners for a common event call their respective callbacks.
// Print number of events associated with an emitter. Remove one of the listeners & call remaining
// listners again. Print number of remaining listners also.

var EventEmitter = require("events")
const ee = new EventEmitter()

function fun1(){
    console.log("listener1 called")
}

function fun2(){
    console.log("listener2 called")
}

ee.on("event1", fun1) 
ee.on("event1", fun2) 

ee.emit("event1")

ee.removeListener("event1", fun1)
x = ee.listenerCount("event1")
console.log(x);

ee.emit("event1")
