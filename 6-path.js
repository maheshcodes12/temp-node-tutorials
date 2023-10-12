const { log } = require("console");
const path = require("path");

const join = path.join("txtFolder", "100-index.txt");
log(join);

const resolve = path.resolve(__dirname, "txtFolder", "100-index.txt");
log(resolve);

const base = path.basename(join);
log(base);

const extension = path.extname(base);
log(extension);
