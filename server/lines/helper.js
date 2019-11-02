const stop = (name = { english: '', arabic: '' }, line = '') => {
  return {
    name,
    line,
  };
};

module.exports = { stop };
