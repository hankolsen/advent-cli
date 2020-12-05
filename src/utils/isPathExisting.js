const fs = require('fs');

const { existsSync } = fs;
const isPathExisting = (path) => existsSync(path);

module.exports = isPathExisting;
