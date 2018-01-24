
// const dotenv = require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
// const massive = require('massive');
const path = require('path');
const port = 3000


const app = module.exports = express();
app.use(json());
app.use(cors());
//Connects to heroku bro
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client/build')));
// console.log('connetion', connectionString)







app.listen(port, () => { console.log(`Listening on port: 3000`)});