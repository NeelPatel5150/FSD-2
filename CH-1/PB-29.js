// Write a JSON object which contains array of 3 objects. Each object contains 2
// properties name and age. Now, sort an array values by age in descending
// order. Print name in terminal as per the sorted age.

obj = {
    details : [{name : "Hetansh", age : 19}, {name : "Hetu", age : 21}, {name : "Het", age : 20}] 
}

obj.details.sort((a,b)=>(b.age-a.age))
console.log(obj.details)
