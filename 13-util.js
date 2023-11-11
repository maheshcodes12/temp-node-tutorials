const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// instead of writing all promise code by ourselves we can use this
// util module. This js module does that work for us.

const func = async () => {
	try {
		const first = await readFilePromise(
			"./txtFolder/100-index.txt",
			"utf8"
		);
		console.log(first);
	} catch (error) {
		console.log(error);
	}
};

func();
// Just don't forget to add uft8 along wtih the path
