const clientRouter = require('express').Router();
const Client = require('../models/client');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../utils/config')

clientRouter.get('/all', async (req, res, next) => {
  try {
    const clients = await Client.find({});
    res.status(200).json(clients);
  }
  catch (error) {
    next(error);
  };
});

clientRouter.get('/', async (req, res, next) => {
  try {
    const decodedToken = jwt.verify(req.token, config.TOKEN);
    const clients = Client.find({ business: decodedToken.id });
    res.status(200).json(clients);
  }
  catch (error) {
    next(error);
  }
})

clientRouter.post('/', async (req, res, next) => {
  const body = req.body;
  const decodedToken = await jwt.verify(req.token, config.TOKEN);
  const newClient = new Client({
    name: body.name,
    mail: body.mail,
    age: body.age,
    business: decodedToken.id,
    trainer: body.trainer
  });
  try{
    await newClient.save();
    res.status(200).json;
  }
  catch (error) {
    next(error)
  };
});

module.exports = clientRouter;