const fs = require("fs");

const checkFile = (filePath, type) => {
  try {
    if (fs.existsSync(filePath) && !fs.lstatSync(filePath).isDirectory()) {
      switch (type) {
        case "input":
          return (fs.accessSync(filePath), fs.R_OK)
            ? true
            : `No read access to ${type} file`;
        case "output":
          return (fs.accessSync(filePath), fs.W_OK)
            ? true
            : `No write access to ${type} file`;
        default:
          return "Unknown file type";
      }
    } else {
      return `Wrong ${type} file path`;
    }
  } catch (err) {
    return "Unknown error";
  }
};

const readFile = (filePath) => {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (err) {
    return "Unknown error";
  }
};

const appendToFile = (filePath, data) => {
  try {
    fs.appendFileSync(filePath, data);
  } catch (err) {
    return "Unknown error";
  }
};

module.exports.checkFile = checkFile;
module.exports.readFile = readFile;
module.exports.appendToFile = appendToFile;
