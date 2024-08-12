const fs = require("fs");
const promisifiedReadFile = (filePath, typeOfEncoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, typeOfEncoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// const filePath = "file.txt";
promisifiedReadFile("file.txt", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
