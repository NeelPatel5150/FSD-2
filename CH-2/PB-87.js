// Write a node.js script to print 1st 10 prime numbers on browser in table of
// 10 rows. Odd no. of rows should render in blue color and even no. of rows
// should render in red color.

http = require("http")

prime = 0
prime_list = []
for (i = 1; prime < 10; i++) {
    count = 0
    for (j = 1; j <= i; j++) {
        if (i % j == 0) {
            count++
        }
    }

    if (count == 2) {
        prime++
        prime_list.push(i)
    }
}

html = "<html><body><table border='1'>"
for (i = 0; i < 10; i++) {
    html += "<tr>"
    if (i % 2 == 0) {
        html += "<td style='color:blue'>" + prime_list[i] + "</td>"
    } else {
        html += "<td style='color:red'>" + prime_list[i] + "</td>"
    }
    html += "</tr>"
}
html += "</table></body></html>"

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(html)
    res.end()
}).listen(3000, function () {
    console.log("Server running at http://localhost:3000/")
})
