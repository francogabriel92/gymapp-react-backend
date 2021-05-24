const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const businessSchema = mongoose.Schema({
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
  trainers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trainer'
    }
  ],
  clients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client'
    }
  ]
});

businessSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  }
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;