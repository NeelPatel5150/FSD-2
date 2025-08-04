// Write a node.js script to write contents to the file in original manner. Delete
// file after finishing writing.

fs = require("fs")

fs.writeFileSync("copy.txt", "Hello, World!")

fs.unlink("copy.txt", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("File deleted")
    } 
})
