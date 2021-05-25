const clientRouter = require('express').Router();
const Client = require('../models/client');

clientRouter.get('/all', async (req, res, next) => {
  try {
    const clients = await Client.find({});
    res.status(200).json(clients);
  }
  catch (error) {
    next(error);
  };
});

clientRouter.post('/', async (req, res, next) => {
  const body = req.body;
  const newClient = {
    name: body.name,
    mail: body.mail,
    age: body.age,
    business: body.business,
    trainer: body.trainer
  };
  try{
    const savedClient = await newClient.save();
    res.status(200).json(savedClient);
  }
  catch (error) {
    next(error)
  };
});

module.exports = clientRouter;