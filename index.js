const express = require("express");
const app = express();
const path = require('path');



//English JSON
const jsonData = require('./views/json/irregular_verbs.json');
const phrasalVerbs = require('./views/json/phrasal_verbs.json');
//Deutsch JSON
const wortschatz1 = require('./views/json/wortschatz1.json');
const unregelmassigeVerben = require('./views/json/irregular_verbs_de.json')

/*
app.use(express.static('public'))
*/
app.use(express.static(__dirname + "/views", {
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

app.get('/english/phrasalVerbs', (req, res) => {
    res.render('english/phrasalVerbs', {phrasalVerbs})
})


app.get('/deutsch/wortschatz1', (req, res) => {
    res.render('deutsch/wortschatz1', {wortschatz1})
})

app.get('/deutsch/unregelmassigeVerben', (req,res) => {
    res.render('deutsch/unregelmassigeVerben', {unregelmassigeVerben})
})

app.listen( 3000, () => {
    console.log("I´m running on PORT 3000!")
}) 

/*comment*/
