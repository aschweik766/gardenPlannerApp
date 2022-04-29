const express = require('express');
const cors = require("cors");
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');


const app = express();
app.set('view engine', 'ejs');

app.use(ejsLayouts);
app.use(express.static(__dirname + '/' + 'public'))
app.use(methodOverride('_method'))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())



const plantControllers = require('./controllers/router')
const varietyControllers = require('./controllers/varieties')

// app.use('/gardenPlannerApp', plantsController);
// app.use('/garden/varieties/', varietyController);

app.get('/favicon.ico', (req, res) => {res.send("dummy")})
app.use('/gardenPlanner/plant', plantControllers);
app.use('/gardenPlanner/variety',varietyControllers);

//test app route://
// app.get('/test', (req, res)=> {res.send('hello-test')});

const port = process.env.PORT || 4000

app.listen(port, ()=> {
    console.log(`server running on port: ${port}`)
});