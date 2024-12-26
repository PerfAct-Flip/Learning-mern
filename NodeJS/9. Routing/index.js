import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 250;
  res.statusMessage = "finee";
  if (req.url === "/") {
    res.end("<h1>Home</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>About</h1>");
  } else {
    res.statusCode = 404;
    res.statusMessage = "BAD";
    res.end("</h2><center>PAGE NOT FOUND</center></h1>");
  }
});

server.listen(8000, () => console.log("Server Up Baby!"));
