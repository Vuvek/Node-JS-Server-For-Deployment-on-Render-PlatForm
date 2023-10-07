// Simple HTTP Server

const http = require('http')

const server =  http.createServer((req,res) => {
    res.writeHead(201,{"Content-Type" : "text/html"});
    res.end("<h1>Hello World</h1>");
})

const PORT = process.env.PORT || 3000;

server.listen(PORT,() => {
    console.log("Server is Up and Running on Port 3000");
})
