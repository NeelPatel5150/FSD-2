function square(num) {
    return num ** 2
}

function reverse(num) {
    rev = 1
    while (num > 0) {
        r = num % 10
        rev = rev * 10 + r
        num = Math.floor(num / 10)
    }
    return rev
}

function check(num1, num2) {
    if (num1 === num2) {
        return true
    } else {
        return false
    }
}

module.exports = {square, reverse, check}
