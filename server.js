require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;

const allroute = require('./routes/allroutes')

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', allroute);
app.get('/home', allroute)
app.get('/politics', allroute)
app.get('/technology', allroute)
app.get('/science', allroute)
app.get('/entertainment', allroute)
app.get('/search', allroute)

app.listen(port, () => {
    console.log('Server Started On http://localhost:3000');
});