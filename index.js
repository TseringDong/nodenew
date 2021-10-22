require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('./routes');


app.use(bodyParser.json())
app.use('/', route);

// let category = [];
// app.get('/users',(req,res)=>{
//     res.json(category);
// })
// app.post('/users',(req,res)=>{
//     category.push(req.body);
//     res.json(req.body);
// })


const server = process.env.PORT || 1000
app.listen(server, ()=>{
    console.log(`the server is running at port: ${server}`);
}) 