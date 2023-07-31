const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const path = require('path'); // Import the path module
const connectDB = require('../config/db');

// Get the absolute path to the config file
const configPath = path.join(__dirname, '../config/config.env');
dotenv.config({ path: configPath });

connectDB();

const transactions = require('./routes/transactions');

const app = express();

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on PORT ${PORT}`.yellow.bold));
