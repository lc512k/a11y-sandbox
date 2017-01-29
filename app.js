const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const focusController = require('./experiments/focus/main')

app.engine('html', exphbs({
	defaultLayout: 'main',
	extname: '.html',
	partialsDir: 'views/partials/',
	layoutsDir: 'views/layouts/'
}));
app.set('view engine', 'html');

app.get('/focus', focusController)

app.listen(process.env.PORT || 3000, () => {console.log('listening')});
