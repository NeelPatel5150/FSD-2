// Write a script to define two JSON objects named as “division1” and
// “division2” having an array to store names of students. These names should
// be sorted alphabetically in the object and should be written to the file. At
// last, both division objects should be visible with names sorted alphabetically
// in file.

fs = require('fs')

division1 = {"names":["aditya","hetansh","hamza","divy"]}
division2 = {"names":["devam","ishan","meet","neel"]}

division1.names.sort()
division2.names.sort()

fs.writeFileSync("test.txt", JSON.stringify(division1)+"\n"+JSON.stringify(division2))
