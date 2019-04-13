const getProperPrice = (passedPath) => {
  const length = passedPath.length;

  if (length <= 9) {
    return 3;
  } else if (length <= 16) {
    return 5;
  } else {
    return 7;
  }
}

module.exports = {
  getProperPrice,
}