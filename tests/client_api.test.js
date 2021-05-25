const mongoose = require('mongoose');
const supertest = require('supertest');
const Client = require('../models/client');
const app = require('../app');
const api = supertest(app);

const businessId = '60ad498c6ec9cf3f7410953c';

beforeAll( async () => {
  await Client.deleteMany({});
  const clients = [
    {
      name: 'Carlos Perez',
      mail: 'mail@pepe.com',
      age: 22,
      business: businessId
    },
    {
      name: 'Roberto Gutierrez',
      mail: 'mail2@pepe.com',
      age: 54,
      business: businessId
    },
    {
      name: 'Juan Garcia',
      mail: 'mail3@pepe.com',
      age: 21,
    }
  ];
  for(i = 0; i < clients.length; i++) {
    let newClient = new Client(clients[i]);
    await newClient.save();
  };
});

describe('When database already have clients', () => {
  test('Get all recibes all the clients in database', async () => {
    const response = await api
      .get('/api/clients/all')
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(response.body).toHaveLength(3);
  });
  test('Post a new client successfully', async () => {
    const newClient = {
      name: 'Pedro Goyena',
      mail: 'mail4@pepe.com',
      age: 24,
    };
    await api
      .post('/api/clients')
      .send(newClient)
      .expect(200)
      .expect('Content-Type', /application\/json/);
      const response = await api
      .get('/api/clients/all')
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(response.body).toHaveLength(4);
  });
});

afterAll(() => {
  mongoose.connection.close()
});