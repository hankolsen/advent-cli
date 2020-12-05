const fs = require('fs');
const path = require('path');

const copyFiles = ({
  dir,
  templatesFolder = path.join(__dirname, '../templates/'),
}) => {
  const fileNames = fs.readdirSync(templatesFolder);

  console.log('Copying files');
  fileNames.forEach((fileName) => {
    fs.copyFileSync(
      path.join(templatesFolder, fileName),
      `./${dir}/${fileName}`,
    );
    if (fileName === 'solve.js') {
      fs.chmodSync(`./${dir}/solve.js`, '755');
    }
  });
};

module.exports = copyFiles;
