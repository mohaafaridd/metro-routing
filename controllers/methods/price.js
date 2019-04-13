const getProperPrice = (passedPath) => {
  const { length } = passedPath;

  let price;
  if (length <= 9) {
    price = 3;
  } else if (length <= 16) {
    price = 5;
  } else {
    price = 7;
  }

  return price;
};

module.exports = {
  getProperPrice,
};
