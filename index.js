const express = require('express');
const app = express();
const config = require('./config/config');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_MONGO, (err) => {
    if (err) throw err;

    console.log('Mongoose connected');
});

config.wire(app);