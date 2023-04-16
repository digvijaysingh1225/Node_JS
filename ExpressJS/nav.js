//www.homepage.com - welcome to my homepage
// /about - Welcome to about page
// /contact - Welcome to contact page
// /temp - Welcome to temp page

const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Homepage");
});

app.get('/about', (req, res) => {
    res.status(200).send("Welcome to About Page.");
});

app.get('/contact', (req, res) => {
    res.status(200).send("Welcome to Contact Page.");
});

app.get('/temp', (req, res) => {
    res.status(200).send("Welcome to Temperature Page.");
});

app.listen(3000, () => {
    console.log("Listening to the port.")
})