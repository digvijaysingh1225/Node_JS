const fs = require('fs');


//For Creation of Folder
// fs.mkdirSync('Node');

//For creating a file and adding data to it.
// fs.writeFileSync('Node/bio.txt', " This is NodeJS Tutorial.");

//For appending more data to that file
// fs.appendFileSync('Node/bio.txt', " Please read carefully.");

//For read data with the buffer data
// const data = fs.readFileSync('Node/bio.txt');
// console.log(data);

//For read data without the buffer data  or  File Encoding
// const data1 = fs.readFileSync('Node/bio.txt','utf8');
// console.log(data1);

//Renaming the file
// fs.renameSync('Node/bio.txt', 'MyBio.txt');

// Deleting a file
// fs.unlinkSync('MyBio.txt');

//Deleting the directory or Folder
// fs.rmdirSync("Node");