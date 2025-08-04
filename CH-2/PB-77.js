// Write node.js script to copy content of one file to the other file. data should
// be fetched from source.txt and insert to destination.txt

fs = require("fs")

fs.writeFileSync("source.txt", "This is lol")

data = fs.readFileSync("source.txt", "utf-8")

fs.writeFileSync("destination.txt", data)
