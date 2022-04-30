const dot = require('dotenv').config();
const express = require('express');
const cors = require("cors");
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');



const app = express();
app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname  + 'public'))
app.use(ejsLayouts);


app.use(methodOverride('_method'))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const plantControllers = require('./controllers/router')
const varietyControllers = require('./controllers/varieties')

app.get('/favicon.ico', (req, res) => {res.send("dummy")})
app.use('/gardenPlanner/plant', plantControllers);
app.use('/gardenPlanner/variety',varietyControllers);

//test app route://
// app.get('/test', (req, res)=> {res.send('hello-test')});

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`server running on port: ${port}`)
});