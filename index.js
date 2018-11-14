const express = require('express');
const app = express();
const config = require('./config/config');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jokertestdb', (err) => {
    if (err) throw err;

    console.log('Mongoose connected');
});

config.wire(app);