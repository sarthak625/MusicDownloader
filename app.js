/**
 *  Libraries
 */
 
const express = require('express');
const logger = require('morgan');

// Initialize express
const app = express();

// Initialize the env file which contains my secrets
require('dotenv').config();

/**
 * Configure middleware
 */

// Morgan for logging
app.use(logger('dev'));

/**
 *  Configure routes
 */

app.use('/',require('./routes/main'));

/**
 * Listen on the specified port
 */

 let port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Server running on port ${port}`));