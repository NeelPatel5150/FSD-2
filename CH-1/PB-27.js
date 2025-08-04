// Write a JS to store an array of objects having height and name. display name
// and height of person with highest height. 

array = [
    {
        height: 5.6,
        name: "Hetansh",
    },

    {
        height: 6.6,
        name: "Hetu",
    },

    {
        height: 4.11,
        name: "Mitu",
    },
]

array.sort((a,b)=>(b.height-a.height))
console.log(array[0])


