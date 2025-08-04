// Write a script to define two JSON objects named as “division1” and
// “division2” having an array to store 5 integer numbers. Write this object in a
// file named XYZ.txt using file system. Define third array as result which gives
// output as explained below: Suppose first array contains base value and second
// array contains power value and then third array will give output as: a^b.For
// example: first array[0]=2 and second array[0]=3 then it should return 8 in third
// array[0] .Also append this result in XYZ.txt and as well as on console.
fs = require("fs")

division1 = {num : [2,3,4,5,6]}
division2 = {num : [7,8,9,0,1]}
division3 = {num : []}

fs.writeFileSync("XYZ.txt", JSON.stringify(division1.num) + '\n')
fs.appendFileSync("XYZ.txt", JSON.stringify(division2.num) + '\n')

for(i in division1.num){
    division3.num[i] = Math.pow(division1.num[i], division2.num[i])
}

fs.appendFileSync("XYZ.txt", JSON.stringify(division3.num) + '\n')
