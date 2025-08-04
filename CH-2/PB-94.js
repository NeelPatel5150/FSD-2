// Write node.js script to print “Welcome to Home Page” with two links
// containing two pages named as “About Us” and “Contact Us” on home page
// of server. If user request for About Us page it should display “Welcome to
// LJ University” in bold font-style with blue color and if user request for
// Contact Us page it should display “Email:abc@ljinstitutes.edu.in” in italic
// font-style with red color if any other request is requested it shows “Page not
// found” message in plaintext.

const http = require('http');
const url = require('url')

server = http.createServer( (request,result) => {
    
    result.writeHead( 200 , {'content-type' : 'text/html'} )

    url_ob = url.parse( request.url , true )

    if (url_ob.pathname == '/home') {
        
        result.write( ` <h1> Welcome to home page </h1> <br>` )
        result.write( ` <a href="http://localhost:3000/aboutUs"> About Us </a> <br>` )
        result.write( ` <a href="http://localhost:3000/contactUs"> Contact Us </a> ` )
    }
    else if (url_ob.pathname == '/aboutUs') {
        result.write( `<h1 style=" font-weight:bold ; color : blue ; " >Welcome to LJ University</h1>` )
    }
    else if (url_ob.pathname == '/contactUs') {
        result.write( `<h1 style=" font-style:italic ; color : red ; " >Email:abc@ljinstitutes.edu.in</h1>` )
    }
    else{
        result.write('page not found')
    }


    result.end()

} )

server.listen( 3000 )
