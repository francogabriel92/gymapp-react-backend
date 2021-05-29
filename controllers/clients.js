const clientRouter = require('express').Router();
const Client = require('../models/client');
const jwt = require('jsonwebtoken');
const config = require('../utils/config')

// GET REQUESTS

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
    const decodedToken = await jwt.verify(req.token, config.TOKEN);
    const clients = await Client.find({ business: decodedToken.id });
    res.status(200).json(clients);
  }
  catch (error) {
    next(error);
  }
})

//POST REQUESTS

clientRouter.post('/', async (req, res, next) => {
  const body = req.body;
  try{
    const decodedToken = await jwt.verify(req.token, config.TOKEN);
    const newClient = new Client({
      name: body.name,
      mail: body.mail,
      age: body.age,
      business: decodedToken.id,
      trainer: body.trainer
    });
    const savedClient = await newClient.save();
    res.status(200).json(savedClient);
  }
  catch (error) {
    console.log(error);
    next(error)
  };
});

// UPDATE REQUESTS

clientRouter.put('/:id', async (req, res, next) => {
  const update = req.body
  try {
    const clientToUpdate = await Client.findById(req.params.id);
    console.log(clientToUpdate);
    const decodedToken = await jwt.verify(req.token, config.TOKEN);
    if (clientToUpdate.business.toString() === decodedToken.id) {
      const updatedClient = await Client.findByIdAndUpdate(clientToUpdate.id,update, { new: true });
      res.status(200).json(updatedClient);
    } else {
      res.status(401).json({ error: 'Not authorized'})
    };
  }
  catch (error) {
    next(error);
  }
});


// DELETE REQUESTS

clientRouter.delete('/:id', async (req, res, next) => {
  try {
    const decodedToken = await jwt.verify(req.token, config.TOKEN);
    const clientToDelete = await Client.findById(req.params.id);
    if (clientToDelete.business.toString() === decodedToken.id) {
      const deletedClient = await Client.findByIdAndDelete(clientToDelete.id);
      res.status(200).json(deletedClient);
    } else {
      res.status(401).json({ error: 'Not authorized'})
    };
  }
  catch (error) {
    next(error);
  }
});

module.exports = clientRouter;