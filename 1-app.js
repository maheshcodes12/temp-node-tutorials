//using predefined modules
//1.Os module gives info about our Operating System
// const os = require("os");
// console.log(os.version());
// console.log(os.hostname());
// console.log(os.arch());
// console.log(os.type());
// console.log(os.userInfo());
// console.log(os.homedir());
//2.__dirname and __filename gives info about file directory and it's location
// console.log(__dirname);
// console.log(__filename);
//3.path module gives info about any path
// const path = require("path");
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.extname(__filename))

//you can also create our own module
//create new file for that module and then export functions from there.
// const math = require("./math");
// console.log(math.add(2, 2));
// console.log(math.sub(2, 2));
//you can also destructure the methods do that you don't always have to write math.
//avoid using objects erverytime.
// const { add, sub, mul, div } = require("./math");
//write same names as that of methods.Order is not necessary
// console.log(mul(2, 3));
// console.log(div(2, 3));

//--------------------LEC 2----------------------------------
//another core module is fs which handles files related operations
// const fs = require("fs");
// const path = require("path");

// fs.readFile(path.join(__dirname, "naughty.txt"), "utf8", (err, data) => {
// 	if (err) throw err;
// 	else console.log(data);
// });

// console.log("hello");

// process.on("uncaughtException", (err) => {
// 	console.error(`There was an unexpected error : ${err}`);
// 	process.exit(1);
// });
//-----------------------------FreeCodeCamp-----------------------------------
// const john = "john";
// const jenny = "jenny";
// const sayHii = (name) => {
// 	console.log(`Hii there ${name}!`);
// };
// sayHii(john);
// sayHii("Mahesh");
//Instead we can write these in seperate files and then import those files (Which are then called modules) here.
// const names = require("./3-names");
// const sayHii = require("./4-sayHii");

// When we import module using require it will instantly run that referenced file. So if we have called any
// functions in that file, they will get executed first.

// sayHii.sayHii("Mahesh");
// sayHii.sayHi(names.john);
// console.log(names.john);
