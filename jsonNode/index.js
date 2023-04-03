const fs = require("fs");

const bioData = {
    name : "Node",
    age : 20,

};
// console.log(bioData.age);

// JSON.stringify :- Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// JSON.parse :- Converts a JavaScript Object Notation (JSON) string into an object.
// const objData = JSON.parse(jsonData);
// console.log(objData);


//Steps to do
// 1: Convert into json
// 2: Add to other file
// 3: ReadFile
// 4: Again convert back to js object original
// 5: console.log

const jsondata = JSON.stringify(bioData);
// fs.writeFile('json1.json', jsondata, (err) => {
//     console.log("File created");
// })

fs.readFile("json1.json", "utf-8", (err,data) => {
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})