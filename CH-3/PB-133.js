// Write a node.js script to find all prime no.s between 1-50 using external module having a function
// checkPrime(). This function returns Boolean value on the basis of a no. is prime or not prime.
// Write all necessary .js files


var obj = require('./PB-133-use.js');
prime = []

for (i = 1; i <= 50; i++) {
    if (obj.isPrime(i)) {
        prime.push(i);
    }
}
console.log(prime);
