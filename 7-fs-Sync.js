const { log } = require("console");
const fs = require("fs");

const text = fs.readFileSync("./txtFolder/100-index.txt", "utf-8");
log(text);

fs.writeFileSync(
	"./txtFolder/new-text-file.txt",
	"Hii there! This is a new text file\n",
	{ flag: "a" }
);
