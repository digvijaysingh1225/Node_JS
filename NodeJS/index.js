/* RELP
1: js Expression
2: use variables
3: Multiline code
4: use (_) to get the last result
5: we can use editor mode
*/



const fs = require("fs");

// For Create a new File
// fs.writeFileSync('read.txt', "Welcome Hello World!");
//After calling this function again it will overwrite the previous one.
// fs.writeFileSync('read.txt', "Welcome, Good Morning, Hello World!");

//For Writing/Append text in file
// fs.appendFileSync("read.txt", " How are you" )

//
const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data)
//Node.js includes an additional data type called Buffer
//(not available in browser's JKavaScript).
//Buffer is mainly used to store binary data,
//while reading from a file or receiving packets over the network

// org_data = buf_data.toString();
// console.log(org_data);

//Rename a file
fs.renameSync("read.txt", "readwrite.txt")