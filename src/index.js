const path = require('path');
const express = require('express')
const morgan = require('morgan');
const app = express();
const handlebars = require('express-handlebars');
const { json } = require('express');
const route= require('./routes')
const port = 3045


app.use(morgan('combined'));
app.use('/vailoz',express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './resources/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
      })