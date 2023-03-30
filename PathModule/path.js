const path = require("path");

console.log(path.dirname('D:\Github\Node_JS\PathModule\path.js'));
console.log(path.extname('D:\Github\Node_JS\PathModule\path.js'));
console.log(path.basename('D:\Github\Node_JS\PathModule\path.js'));


const myPath = path.parse('D:\Github\Node_JS\PathModule\path.js');
console.log(myPath.name);