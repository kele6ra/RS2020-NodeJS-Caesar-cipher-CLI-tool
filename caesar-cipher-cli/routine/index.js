const file = require("../file");
const caesar = require("../caesar");
const cli = require("../cli");

const checkFileArg = (args, type) => {
  if (args[type]) {
    const check = file.checkFile(args[type], type);
    if (check != true) {
      console.error(check);
      process.exit(1);
    }
  } else {
    return "console";
  }
  return "file";
};

const main = (args) => {
  const inputSource = checkFileArg(args, "input");
  const outputSource = checkFileArg(args, "output");

  if (inputSource === "file") {
    const inputData = file.readFile(args.input);
    const outputData = caesar.proccess(
      inputData,
      Number(args.shift),
      args.action
    );
    if (outputSource === "file") {
      file.appendToFile(args.output, outputData);
    } else {
      console.log(outputData);
    }
    process.exit(0);
  } else {
    while (true) {
      const inputData = cli.readLine();
      const outputData = caesar.proccess(
        inputData,
        Number(args.shift),
        args.action
      );
      if (outputSource === "file") {
        file.appendToFile(args.output, outputData);
      } else {
        console.log(outputData);
      }
    }
  }
};

module.exports.main = main;
