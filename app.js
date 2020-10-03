const { program } = require("commander");
const routine = require("./caesar-cipher-cli/routine");

program.storeOptionsAsProperties(false);
program
  .requiredOption("-s, --shift <shift>", "caesar cipher shift")
  .option("-i, --input [file]", "input file path")
  .option("-o, --output [file]", "output file path")
  .requiredOption("-a, --action <type>", "encode/decode");

routine.main(program.parse(process.argv)._optionValues);
