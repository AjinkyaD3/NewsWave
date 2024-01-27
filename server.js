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

const def = async (req, res) => {
    res.redirect('home')
}
const home = async (req, res) => {
    console.log(req);
    const userPageNumber = parseInt(req.query.page) || 1;
    const lang = req.query.lang || 'en';
    let articles = []

    try {
        articles = await newsapi.v2.topHeadlines({
            page: userPageNumber,
            language: lang,

        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    res.render('index', { article: articles });
}
const politics = async (req, res) => {
    const userSearchString = req.query.q || 'politics';
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
    res.render('index', { article: articles });
}
const technology = async (req, res) => {
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
    res.render('index', { article: articles });
}
const science = async (req, res) => {
    const userSearchString = req.query.q || 'science';
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
    res.render('index', { article: articles });
}
const entertainment = async (req, res) => {
    const userSearchString = req.query.q || 'entertainment';
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
    res.render('index', { article: articles });
}

const search = async (req, res) => {
    const userSearchString = req.query.q;
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
    res.render('index', { article: articles });
}


app.get('/', def);
app.get('/home', home)
app.get('/politics', politics)
app.get('/technology', technology)
app.get('/science', science)
app.get('/entertainment', entertainment)
app.get('/search', search)


app.listen(port, () => {
    console.log('Server Started On http://localhost:3000');
});

























