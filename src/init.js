const getDirName = require('./utils/getDirName');
const createDirectory = require('./utils/createDirectory');
const copyFiles = require('./utils/copyFiles');

const init = async (day) => {
  const dir = getDirName(day);
  await createDirectory(dir);
  copyFiles(dir);
  console.log('Done!');
};

module.exports = init;
