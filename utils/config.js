require('dotenv').config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.NODE_ENV === 'test'
  ? process.env.MONGODB_URI_TEST
  : process.env.MONGODB_URI;
const TOKEN = 'SLJfigsYDdm1hf8z';

module.exports = {
  PORT,
  MONGODB_URI,
  TOKEN
};