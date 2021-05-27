const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/business');
const config = require('../utils/config');


loginRouter.post('/', async ( req, res, next ) => {
  const body = req.body;
  try {
    const user = await User.findOne({ username: body.username });
    const passwordCorrect = user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash);
    if(!(user && passwordCorrect)) {
      return res.status(401).json({ error: 'Invalid username or password' });
    };
    const userForToken = {
      username: user.username,
      id: user._id
    };

    const token = jwt.sign(
      userForToken,
      config.TOKEN,
      { expiresIn: 60*60 }
      );
    res
      .status(200)
      .send({ token, name: user.name });
  }
  catch (err) {
    next(err);
  };
});

module.exports = loginRouter;