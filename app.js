const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./utils/config');
const middleware = require('./utils/middleware');
const mongoose = require('mongoose');
const logger = require('./utils/logger');
const clientRouter = require('./controllers/clients');
const loginRouter = require('./controllers/login');
const businessRouter = require('./controllers/businesses');


// CONNECT TO MONGODB

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch((error) => {
    logger.error('Error connecting to MongoDB:', error.message);
  });


// MIDDLEWARE
app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.getToken)
app.use(middleware.requestLogger);

// ROUTES

app.use('/api/login', loginRouter);
app.use('/api/clients',clientRouter);
app.use('/api/business', businessRouter);

// ERRORS
app.use(middleware.errorHandler);
app.use(middleware.unknownEndpoint);

module.exports = app;