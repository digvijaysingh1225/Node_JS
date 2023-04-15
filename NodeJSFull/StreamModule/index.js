// 2nd way
// Reading from a Stream
// Create a readable Stream
// Handle stream events --> data, end, and error

const fs = require('fs');
const http = require("http");

// This is the normal way of doint it, Not using via Stream module
const server = http.createServer();
server.on('request', (req, res) => {
    
    // fs.readFile('Notes.txt', (err, data) => {
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // })

    // Using stream
    // const rstream = fs.createReadStream("Notes.txt");
    // rstream.on("data", (chunkdata) => {
    //     res.write(chunkdata);
    // })
    // rstream.on("end", () => {
    //     res.end();
    // })
    // rstream.on("error", (err) => {
    //     console.log(err);
    //     res.end("File not found");
    // })

    // Using stream.pipe() in one line
    const rstream = fs.createReadStream("Notes.txt");
    rstream.pipe(res);
})

server.listen(8000, "127.0.0.1");