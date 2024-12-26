import http from "http";


const server = http.createServer((req,res)=>{
    res.writeHead(250,"FINEE", {"Content-Type" : "text/html"});
    re
});

server.listen(5000, ()=> console.log("SERVER UP"));