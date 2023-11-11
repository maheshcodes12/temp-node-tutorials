// There are  multiple patterns like async.then.catch to handle the
// asynchromnous functions. In async.then.catch method we have to use
// callbacks and  promises. That is bit messy.

const { readFile } = require("fs");

// 1.Usual callbacks and promises
const getText = (path) => {
	return new Promise((resolve, reject) => {
		readFile(path, "utf8", (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
};

getText("./txtFolder/100-index.txt")
	.then((result) => {
		console.log("1st method result");
		console.log(result);
	})
	.catch((err) => {
		console.log(err);
	});

// 2.Using async and awaits and putting our function call in try catch block
const start = async () => {
	try {
		const first = await getText("./txtFolder/100-index.txt");
		const second = await getText("./txtFolder/new-text-file.txt");
		console.log("\n2nd method result");
		console.log(first);
		console.log(second);
	} catch (error) {
		console.log(error);
	}
};
start();
