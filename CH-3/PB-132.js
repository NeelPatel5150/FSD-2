// Write a node.js script to load a simple.html file on nodejs web server & prints its contents as an
// html content

fs = require("fs")


fs.readFileSync("index.html", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})


