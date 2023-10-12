const { log } = require("console");
const fs = require("fs");

fs.readFile("./txtFolder/100-index.txt", "utf-8", (err, result) => {
	if (err) {
		log("There was some error in readFile function");
	}
	const textObtained = result;
	log(textObtained);
	fs.writeFile(
		"./txtFolder/result-async.txt",
		`Result of async fs : ${textObtained}\n`,
		(err, result) => {
			if (err) {
				log("Error in write function");
			}
			console.log(result);
		}
	);
});

log("This text should be displayed last");
