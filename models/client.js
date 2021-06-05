const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mail: String,
  age: Number,
  address: String,
  phone: String,
  birthDate: Date,
  city: String,
  gender: {
    type: String,
    required: true
  },
  business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Business'
  },
  trainer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trainer'
  }
});

clientSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;