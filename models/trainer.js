const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const trainerSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  name: String,
  business: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Business'
    }
  ],
  clients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client'
    }
  ]
});

trainerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  }
});

const Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = Trainer;