const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const mainRoutes = require('./routes/main');

var expressHbs  = require('express-handlebars');

app.engine(
    'hbs',
    expressHbs({
      extname: 'hbs',
      defaultLayout: 'main-layout',
      layoutsDir: 'views/layouts/'
    })
);

app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not found'});
});

app.listen(3000);