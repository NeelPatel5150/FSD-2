// Write a node.js script to create a class time & assign members hour, minute & second. Create two
// objects of time class & add both the time objects so that it should return is third time object.
// Third time object should have hour, minute & second such that after addition if second exceeds
// 60 then minute value should be incremented. If minute exceeds 60 then hour value should be
// incremented.

class Time{
    constructor(hour,min,sec){
        this.hour = hour
        this.min = min
        this.sec = sec
    }

    timer(t1, t2){
        var t = new Time()
        t.hour = t1.hour + t2.hour
        t.min = t1.min + t2.min
        t.sec = t1.sec + t2.sec

        if(t.sec>60){
            t.min += Math.floor(t.sec/60)
            t.sec = t.sec % 60
        }
        if(t.min>60){
            t.hour += Math.floor(t.min/60)
            t.min = t.min % 60
        }

        return t
    }
}

var t1 = new Time(2,40,30)
var t2 = new Time(4,40,20)
var t3 = new Time()
t3 = t3.timer(t1,t2)
console.log(t3)

