const businessRouter = require('express');
const Business = require('../models/business');
const bcrypt = require('bcrypt');
const saltRounds = 10;

businessRouter.get('/', async (req, res, next) => {
  try {
    const business = await Business.findOne({ username: req.body.username })
    res.status(200).json(business);
  }
  catch (error) {
    next(error);
  };
});

businessRouter.post('/', async (req, res, next) => {
  try {
    const newBusiness = {
      username = req.body.username,
      passwordHash = await bcrypt.hash(req.body.password, saltRounds),
      name: req.body.name
    };
    const savedBusiness = await newBusiness.save();
    res.status(200).json(savedBusiness);
  }
  catch (error) {
    next(error);
  };
});

businessRouter.put('/password', async (req, res, next) => {
  try {
    const newPassword = await bcrypt.hash(req.body.password, saltRounds);
    const business = await Business.findOne({ username: req.username });
    business.passwordHash = newPassword;
    const updatedBusiness = await Business.findByIdAndUpdate(business.id, business, { new: true });
    res.status(200).json(updatedBusiness);
  }
  catch (error) {
    next(error);
  };
}); 