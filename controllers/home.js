const line1 = ['Cairo', 'Giza'];
const line2 = ['Cairo', 'Alexandria'];
const line3 = ['Giza', 'Aswan'];

const lines = [line1, line2, line3]

const home = (req, res) => {

  const source = req.body['source'];
  const destination = req.body['destination'];

  res.render('index', { title: 'Express', lines });
}

module.exports = {
  home
}