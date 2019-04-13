const { lines, addLines } = require('./lines');

const index = (req, res) => {
  res.render('admin/index', {
    title: 'Admin Panel',
    lines,
  });
}

const edit = (req, res, next) => {
  res.render('admin/edit', {
    title: 'Edit Line',
    type: 'Edit',
    action: 'edit',
    lines
  });
}

const add = (req, res, next) => {
  res.render('admin/edit', {
    title: 'Add Line',
    type: 'Add',
    action: 'add',
    lines
  });
}

const postLine = (req, res) => {
  const name = req.body['name'];
  const stops = (req.body['stops']).split(" - ");
  addLines(name, stops);
  res.redirect('/admin');
}

module.exports = { index, edit, add, postLine }