const clientRouter = require('express').Router();
const Client = require('../models/client');
const jwt = require('jsonwebtoken');
const config = require('../utils/config');

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
  let endDate;
  try{
    const decodedToken = await jwt.verify(req.token, config.TOKEN);
    if(body.subType === 'months') {
      endDate = new Date();
      endDate.setMonth(endDate.getMonth()+body.subQty);
    } else if (body.subType === 'days') {
      endDate = new Date();
      endDate.setDate(endDate.getDate()+body.subQty);
    }
    const newClient = new Client({
      name: body.name,
      mail: body.mail,
      birthDate: body.birthDate,
      phone: body.phone,
      address: body.address,
      city: body.city,
      subEndDate: endDate,
      gender: body.gender,
      business: decodedToken.id,
      trainer: body.trainer
    });
    const savedClient = await newClient.save();
    res.status(200).json(savedClient);
  }
  catch (error) {
    next(error)
  };
});

// UPDATE REQUESTS

clientRouter.put('/:id', async (req, res, next) => {
  const update = req.body
  try {
    const clientToUpdate = await Client.findById(req.params.id);
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

clientRouter.put('/addtime/:id', async (req, res, next) => {
  const body = req.body;
  body.subQty = Number(body.subQty)
  try{
    const clientToUpdate = await Client.findById(req.params.id);
    const decodedToken = await jwt.verify(req.token, config.TOKEN);
    const currentDate = new Date();
    let endDate = new Date(clientToUpdate.subEndDate);
    (endDate.getTime() < currentDate.getTime()) ? endDate = new Date(currentDate) : endDate;
    if(body.subType === 'months') {
      endDate.setMonth(endDate.getMonth() + body.subQty);
    } else if (body.subType === 'days') {
      endDate.setDate(endDate.getDate()+body.subQty);
    };
    clientToUpdate.subEndDate = endDate;
    if (clientToUpdate.business.toString() === decodedToken.id) {
      const updatedClient = await Client.findByIdAndUpdate(clientToUpdate.id, clientToUpdate, { new: true });
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