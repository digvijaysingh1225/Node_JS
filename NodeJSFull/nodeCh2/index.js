//CHallenge of Asynchronous CRUD Operation

// 1. Create a Folder and named it;
// 2. Create a file in it and name as bio.txt and put some data into it.
// 3. Add more data into the file at the end of the existing data.
// 4. Read the data without getting the buffer data at first.
// File encoding.
// 5. Rename the file name to mybio.txt.
// 6. Now delete both the file and the folder.

const fs = require("fs");

// fs.mkdir("AsyncCh", () => {
//     console.log("Folder Created");
// });

// fs.writeFile("AsyncCh/bio.txt","Hello, This is Challenge 2.", (err) => {
//     console.log("file created")
// })

// fs.appendFile("AsyncCh/bio.txt", " This is a challenge of Asynchronous CRUD Operation. ", (err) => {
//     console.log("Data Appended");
// })

// fs.readFile("AsyncCh/bio.txt", "utf-8", (err, data) => {
//     console.log(data);
// })

// fs.rename("AsyncCh/bio.txt", "AsyncCh/mybio.txt", (err) => {
//     console.log("Renamed");
// })

// fs.unlink("AsyncCh/mybio.txt", (err) => {
//     console.log("File Deleted");
// })

// fs.rmdir("AsyncCh", (err) => {
//     console.log("Folder Deleted");
// })
