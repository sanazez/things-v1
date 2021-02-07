/* eslint-disable dot-notation */
require('dotenv').config();
const bodyParser = require('body-parser');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');

const {
    PORT,
} = process.env;

const express = require('express');

const app = express();

const api = require('./routes/api');

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use('/api', api);

app.listen(PORT);
