// Write a node.js script to create my own module to calculate reverse of a given number. That
// module should be use to compute all numbers between 1 to 100 in which square of reverse &
// reverse of sqaure is same. This has call of reverse twice so call it from module. Also keep a
// function to compute average of any number of elements.

var {square, reverse, check} = require('./PB-130-use.js');

sq_num = square(2)
num_rev = reverse(2)
sq_num_rev = square(num_rev)

valid = check(sq_num, sq_num_rev)

if (valid) {
    console.log("True")
}
else{
    console.log("False")
}
