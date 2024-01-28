const express = require('express')
const app = express.Router()


const def = require("./../controller/def")
const home = require("./../controller/home")
const politics = require("./../controller/politics")
const technology = require("./../controller/technology")
const science = require("./../controller/science")
const entertainment = require("./../controller/entertainment")
const search = require("./../controller/search")


app.get('/', def);
app.get('/home', home)
app.get('/politics', politics)
app.get('/technology', technology)
app.get('/science', science)
app.get('/entertainment', entertainment)
app.get('/search', search)

module.exports = app