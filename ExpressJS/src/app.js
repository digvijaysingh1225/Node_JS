const path = require("path");
const express = require('express');
const app = express();
const hbs = require("hbs");

//relative absolute
// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, " ../templates/partials")

//to set the view engine
app.set("view engine", "hbs");
//To change name of the views directory
app.set('views', templatePath);
hbs.registerPartials(partialsPath)

//builtin middleware
// app.use(express.static(staticPath));

// template engine route
app.get("", (req, res) => {
    res.render("index", {
        // writename:""   
    });
})

app.get("/about", (req, res) => {
    res.render("about");
})
// app.get(route, callback)
// app.get("/", (req, res) => {
//     res.send("Hello World")
// });

// app.get('/about', (req, res) => {
//     res.send("This is about page.")
// })

app.get("*", (req, res) => {
    res.render("404");
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