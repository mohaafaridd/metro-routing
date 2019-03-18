var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
const hbs = require('hbs');

var indexRouter = require('../routes/index');
var controlsRouter = require('../routes/control');

const defaultPath = path.join(__dirname, '..');
var app = express();

// view engine setup
app.set('views', path.join(defaultPath, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(defaultPath, 'public'),
  dest: path.join(defaultPath, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(defaultPath, 'public')));
app.use('/js', express.static(path.join(defaultPath, 'node_modules', 'bootstrap', 'dist', 'js'))); // redirect bootstrap JS
app.use('/js', express.static(path.join(defaultPath, 'node_modules', 'jquery', 'dist'))); // redirect JS jQuery
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

app.use('/', indexRouter);
app.use('/control', controlsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
