const { log } = require("console");
const lodash = require("lodash");
const { it } = require("node:test");

const items = [1, [2, [3, [4]]]];
const newItems = lodash.flattenDeep(items);

log(newItems);
