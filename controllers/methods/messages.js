const { getLineName } = require('./line');

const getProperMessage = (source, destination, res) => {

  let message;

  // Case 3: stops aren't connected by any mean
  if (!getLineName(source)[0] || !getLineName(destination)[0]) {
    message = 'احنا هنهزر'
    return res.render('error', { message });
  }

  // Case 4: Source is the destination
  if (source === destination) {
    message = 'احنا هنهزر'
    return res.render('error', { message })
  }

  return message;
}

module.exports = {
  getProperMessage,
}