//CHallenge of Synchronous CRUD Operation

// 1. Create a Folder and named it;
// 2. Create a file in it and name as bio.txt and put some data into it.
// 3. Add more data into the file at the end of the existing data.
// 4. Read the data without getting the buffer data at first.
// File encoding.
// 5. Rename the file name to mybio.txt.
// 6. Now delete both the file and the folder.


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