// Write a program to demonstrate various methods of os module in Node.js

const { log } = require("console")

os = require("os")

log(os.hostname())
log(os.freemem())
log(os.arch())
log(os.platform())
log(os.tmpdir())
