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



const plantsController = require('./controllers/router')
const varietyController = require('./controllers/varieties')

// app.use('/gardenPlannerApp', plantsController);
// app.use('/garden/varieties/', varietyController);

app.use(plantsController);

//test app route://
// app.get('/test', (req, res)=> {res.send('hello-test')});

const port = process.env.PORT || 4000

app.listen(port, ()=> {
    console.log(`server running on port: ${port}`)
});