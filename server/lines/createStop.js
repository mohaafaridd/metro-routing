const stop = (name = { english: '', arabic: '' }, lines = []) => {
  return {
    name,
    lines,
  };
};

module.exports = stop;
