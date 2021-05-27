const logger = require('./logger');

const requestLogger = ( req, res, next ) => {
  logger.info('Method: ', req.method);
  logger.info('Path: ', req.method);
  logger.info('Body: ', req.body);
  logger.info('---');
  next();
};

const getToken = (req, res, next) => {
  const authorization = req.get('Authorization');
  if( authorization && authorization.toLowerCase().startsWith('bearer ')) {
    req.token = authorization.substring(7);
    next();
  };
  req.token = null;
  next();
}

const unknownEndpoint = ( req, res ) => {
  res.status(404).send({ error: 'Unknown endpoint' });
};

const errorHandler = (error, req, res, next) => {
  logger.error(error.message);
  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return res.status(400).send({ error: error.message });
  } else if (error.name === 'TokenExpiredError') {
    return res.status(401).json({ error: 'token expired'});
  };
  next(error);
}

module.exports = {
  requestLogger,
  getToken,
  unknownEndpoint,
  errorHandler
}