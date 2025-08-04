// Write a function 'ArrayToObject' which takes in an array of arrays, and
// returns an object with each pair of elements in the array as a key-value pair
// and store the result in one arraytoobject.txt file.
// Input=[['Country', India'], ['State', 'Gujarat'], ['City', ‘Ahmedabad’]]
// Output= { Country : ' India ', State : ' Gujarat ', City : ‘Ahmedabad’ }

let arr = [['Country', 'India'], ['State', 'Gujarat'], ['City', 'Ahmedabad']];

function ArrayToObject(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i][0]] = arr[i][1];
    }
    return obj;
}

let result = ArrayToObject(arr);

const fs = require('fs');

fs.writeFileSync('arraytoobject.txt', JSON.stringify(result));  // Write the result to a fill
