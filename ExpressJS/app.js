const express = require('express');
const app = express();

// app.get(route, callback)
app.get("/", (req, res) => {
    res.send("Hello World")
});

app.get('/about', (req, res) => {
    res.send("This is about page.")
})

app.listen(8000, () => {
    console.log("Listening from the port at 8000");
})

// The callback function has 2 parameters, request(req) and response(res)
// The request object(req) represents the HTTP request and
// has properties for the request query string, parameters, body, HTTP headers, etc.

// Similarly, the response object represents the HTTP response
// that the Express app sends when it receives an HTTP request.




// API
// get - Read 
// post - create 
// put - update 
// delete - delete