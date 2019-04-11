const lines = require('./lines');

const index = (req, res, next) => {
  res.render('admin/index', {
    title: 'Admin Panel',
    lines: lines.lines
  });
}

const edit = (req, res, next) => {
  res.render('admin/edit', {
    title: 'Edit Line',
    type: 'Edit',
    action: 'edit',
    lines: lines.lines
  });
}

const add = (req, res, next) => {
  res.render('admin/edit', {
    title: 'Add Line',
    type: 'Add',
    action: 'add',
    lines: lines.lines
  });
}

const postLine = (req, res) => {
  const name = req.body['name'];
  const stops = (req.body['stops']).split(" - ");
  lines.add(name, stops);
  res.redirect('/admin');
}

module.exports = { index, edit, add, postLine }