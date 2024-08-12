const fs = require("fs");
function read(err, data) {
  if (err) {
    console.log("File not found");
  } else {
    console.log(data);
  }
}
fs.readFile("a.txt", "utf-8", read);
