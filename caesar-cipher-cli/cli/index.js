const readlineSync = require("readline-sync");
let counter = 0;
let invitation = " Write your string: ";

const readLine = () => {
  if (counter > 0) invitation = "Continue (Use Ctrl+c to stop): ";
  counter++;
  return readlineSync.question(invitation);
};

module.exports.readLine = readLine;
