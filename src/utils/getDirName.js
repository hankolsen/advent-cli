const guessDate = require('./guessDate');

const getDirName = (day) => {
  if (day === undefined) {
    day = guessDate();
    console.log(`No day specified, using today's date ${day}`);
  }

  day = String(day).padStart(2, '0');
  return day;
};

module.exports = getDirName;
