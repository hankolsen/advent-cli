const fs = require('fs');
const path = require('path');

const copyFiles = (day) => {
  const basePath = path.join(__dirname, '../templates/');
  const filenNames = [
    'solve.js',
    'test.js',
    'utils.js',
  ];

  console.log('Copying files');
  filenNames.forEach((fileName) => {
    fs.copyFileSync(path.join(basePath, fileName), `./${day}/${fileName}`);
  });

  fs.chmodSync(`./${day}/solve.js`, '755');
};

module.exports = copyFiles;
