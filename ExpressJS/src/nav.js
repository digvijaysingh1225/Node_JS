//www.homepage.com - welcome to my homepage
// /about - Welcome to about page
// /contact - Welcome to contact page
// /temp - Welcome to temp page

const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.write("<h1>Welcome to Homepage</h1>");
    res.send(); // For close connection
});

app.get('/about', (req, res) => {
    res.status(200).send("Welcome to About Page.");
});

app.get('/contact', (req, res) => {
    res.status(200).send("Welcome to Contact Page.");
});

app.get('/temp', (req, res) => {
    res.send({
        "id" : 1,
        "temp" : 40
    }); // we can use json instead of send
});


// The methods are identical when an object or array is passed, but res.json() will also convert non-objects, such as null and undefined, which are not valid JSON.
app.listen(3000, () => {
    console.log("Listening to the port.")
})