const sayHii = (name) => {
	console.log(`Hii there ${name}!`);
};
const sayHi = (name) => {
	console.log(`Hii there ${name}!`);
};

module.exports = { sayHii, sayHi };

// if I export functions like this (using module.exports) we can directly use them (without objects)(when
// there is only one func) in the main file unlike when I do exports.sayHii it will throw error.

// Simply saying exports.funcName will require us to refer those functions through objects no matter how many functions
// are there.
