const fs = require('fs');
const confirmContinue = require('./confirmContinue');
const isPathExisting = require('./isPathExisting');

const createDirectory = async (dir) => {
  if (isPathExisting(dir)) {
    if (
      !(await confirmContinue(
        `Directory ${dir} already exists. Continue anyways?`,
      ))
    ) {
      process.exit(0);
    }

    return true;
  }

  try {
    fs.mkdirSync(dir);
  } catch (err) {
    console.log(`Could not create directory ${dir}`);
    process.exit(1);
  }
  return true;
};

module.exports = createDirectory;
