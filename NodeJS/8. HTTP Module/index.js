import http from 'http';

//Create our server
const server = http.createServer((req, res) => {
    // console.log(req);
    // res.setHeader("Content-Type", "text/html" );
    // res.statusCode = 404;
    // res.statusMessage = "BAD";

    //Shorthand for status (code, message, & header)
    res.writeHead(202, "Good", { "Content-Type" : " text/html"});
    res.write("<h1> hello from server side ..."); 
});

//Listening on port 8000
server.listen(8000, () => console.log("Server Up!"));