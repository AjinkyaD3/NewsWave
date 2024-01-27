require('dotenv').config();
const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000;


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("hello World!")
})






app.listen(port, () => {
    console.log("Server Started On http://localhost:3000")
})