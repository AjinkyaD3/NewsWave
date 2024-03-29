const path = require('path');
const NewsAPI = require('newsapi');
const apiKey = process.env.API_KEY;
const newsapi = new NewsAPI(apiKey);

const absolutePath = path.join(__dirname, "..", 'views', 'index');

const politics = async (req, res) => {
    const userSearchString = req.query.q || 'politics';
    const userPageNumber = parseInt(req.query.page) || 1;
    const lang = req.query.lang || 'en';
    let articles = []
    console.log("path:" + req.path + " page:" + req.query.page + " q:" + req.query.q)
    try {
        articles = await newsapi.v2.everything({
            q: userSearchString,
            page: userPageNumber,
            language: lang,
            "pageSize": 16

        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    res.render(absolutePath, { article: articles });
}

module.exports = politics