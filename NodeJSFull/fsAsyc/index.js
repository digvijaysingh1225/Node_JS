const fs = require('fs');

// fs.writeFile("read.txt", "Today is Wednesday.", 
// (err) => {
//     console.log("File is created");
//     console.log(err);
// });

// We pass them a function as an argument - a callback -
// that gets called when that task completes.
//The callback has an argument that tells you whether
//the operation completed successfully.
//Now we need to say what to do when fs.writeFile
// has completed (even if it's nothing), and start
//checking for errors


// fs.appendFile("read.txt", " Tomorrow is Thrusday.",
// () => {
//     console.log("Task Completed");
// });


// fs.readFile("read.txt", "UTF-8", 
// (err, data) => {
//     console.log(data);       //console.log(data.toString());
// })