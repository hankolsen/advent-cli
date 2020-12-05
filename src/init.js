const getDirName = require('./utils/getDirName');
const createDirectory = require('./utils/createDirectory');
const copyFiles = require('./utils/copyFiles');

const init = async ({ day, templates: templatesFolder }) => {
  const dir = getDirName(day);
  await createDirectory(dir);
  copyFiles({ dir, templatesFolder });
  console.log('Done!');
};

module.exports = init;
