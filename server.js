require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = 3000;

const NewsAPI = require('newsapi');
const apiKey = process.env.API_KEY;
const newsapi = new NewsAPI(apiKey);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    const userSearchString = req.query.q || 'technology';
    const userPageNumber = parseInt(req.query.page) || 1;
    const lang = req.query.lang || 'en';
    let articles = []

    try {
        articles = await newsapi.v2.everything({
            q: userSearchString,
            page: userPageNumber,
            language: lang,
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    // console.log(articles)
    // console.log(typeof articles)
    // res.json(articles)
    res.render('index', { article: articles });
});

app.listen(port, () => {
    console.log('Server Started On http://localhost:3000');
});
