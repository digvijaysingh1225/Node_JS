//The http.createServer() method includes request and response parameters which supplied by Node.js.
//The request object can be used to get information about the current HTTP request
// e.g., url, request header, and data.

//The response object can be used to send a response for a current HTTp request.

// If the response from the HTTP server is supposed to be displayed as HTML, 
// you should include an HTTP header with the correct content type:

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const data = fs.readFileSync(`${__dirname}/userApi/userapi.json`, "utf-8");
    const objData = JSON.parse(data);
    
        // console.log(req.url);
    if(req.url == "/"){
        res.end('Hello from the Home side');

    }
    else if(req.url == "/about"){
        
        // res.end("Hello from the About Us sides");
                        //or//
        res.write("Hello form About Us side");
        res.end();
    }
    else if(req.url == "/userapi"){
            // console.log(data);
            // res.end(data);
            // console.log(objData[0].cpi);
            res.writeHead(200, { "content-type" : "application/json"});
            res.end(objData[15].sname);
        
    }
    else{
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("<h1> 404 error. Page doesn't exist.</h1>")
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the port");
});