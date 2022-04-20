const express = require('express');
const methodOverride = require('method-override')
const plantsController = require('./controllers/router')


const app = express();

app.use(methodOverride('_method'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'ejs')

app.use(plantsController);


//test app route://
// app.get('/test', (req, res)=> {res.send('hello-test')});

const port = process.env.PORT || 4000

app.listen(port, ()=> {
    console.log(`server running on port: ${port}`)
});