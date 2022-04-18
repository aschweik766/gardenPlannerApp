const express = require('express');
const methodOverride = require('method-override')
const app = express()

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

//const controller = require('./controller)
app.get('/test', (req, res)=> {res.send('hello-test')});

//controller use app.use('/controller', controller)//

const port = process.env.PORT || 4000

app.listen(port, ()=> {console.log(`server running on port: ${port}`)})