const express = require("express");
const app = express();
const path = require('path');

let jsonData = require('./public/json/irregular_verbs.json');
let jsonDeutschWortschatz = require('./public/json/deutschWortschatz1.json');
let wortschatz1 = require('./public/json/wortschatz1.json');

app.use(express.static(__dirname + "/public", {
    index: false, 
    immutable: true, 
    cacheControl: true,
    maxAge: "30d"
}));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))


app.get('/',(req, res) => {

    res.render('english/irregularExercise1', {jsonData})
})

app.get('/english/irregularTable', (req, res) => {
    
    res.render('english/irregularTable', {jsonData})
})

app.get('/english/irregularExercise1', (req, res) => {
    res.render('english/irregularExercise1', {jsonData})
})

app.get('/deutsch/wortschatz1', (req, res) => {
    res.render('deutsch/wortschatz1', {jsonDeutschWortschatz, wortschatz1})
})

app.listen( 3000, () => {
    console.log("I´m running on PORT 3000!")
})