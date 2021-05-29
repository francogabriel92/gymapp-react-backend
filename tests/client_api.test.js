const mongoose = require('mongoose');
const supertest = require('supertest');
const Client = require('../models/client');
const Business = require('../models/business');
const jwt = require('jsonwebtoken');
const app = require('../app');
const api = supertest(app);

const businessId = '60ad498c6ec9cf3f7410953c';
let token;
const newClient = {
  name: 'Pedro Goyena',
  mail: 'mail4@pepe.com',
  age: 24,
};
const newBusiness ={
  username: 'franco',
  password: '123456'
};
const newBusiness2 ={
  username: 'carlos',
  password: '123456'
};

beforeAll( async () => {
  await Client.deleteMany({});
  await Business.deleteMany({});
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
  await api
    .post('/api/business')
    .send(newBusiness);
  await api
    .post('/api/business')
    .send(newBusiness2);
  const response = await api
    .post('/api/login')
    .send(newBusiness);
  token = response.body.token;
});

describe('When database already have clients', () => {
  test('Get all recibes all the clients in database', async () => {
    const response = await api
      .get('/api/clients/all')
      .set( 'Authorization', `bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(response.body).toHaveLength(3);
  });

  test('Post a new client successfully', async () => {
    await api
      .post('/api/clients/')
      .set( 'Authorization', `bearer ${token}`)
      .send(newClient)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    const response = await api
      .get('/api/clients/all')
      .set( 'Authorization', `bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(response.body).toHaveLength(4);
  });

  test('Post a client with invalid token get 401', async () => {
    await api
      .post('/api/clients')
      .send(newClient)
      .expect(401)
      .expect('Content-Type', /application\/json/);
  });

  test('Get clients with invalid token get 401', async () => {
    const response = await api
      .get('/api/clients')
      .expect(401)
      .expect('Content-Type', /application\/json/);
  });

  test('Get client with valid token receives the client', async () => {
    const response = await api
      .get('/api/clients')
      .set( 'Authorization', `bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(response.body).toHaveLength(1);
  });

  test('Update client with correct token get client updated', async () => {
    debugger
    const getClient = await api
      .get('/api/clients')
      .set( 'Authorization', `bearer ${token}`);
    const clientToUpdate = getClient.body[0];
    const updateClient = {
      ...clientToUpdate,
      name: 'Rodrigo'
    };
    const response = await api
      .put(`/api/clients/${clientToUpdate.id}`)
      .set( 'Authorization', `bearer ${token}`)
      .send(updateClient)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    const getResponse = await api
      .get('/api/clients')
      .set( 'Authorization', `bearer ${token}`);
    expect(getResponse.body[0].name).toContain('Rodrigo');
  });

  test('Delete a client with correct id and bad token get 401', async () => {
    const getResponse = await api
      .get('/api/clients')
      .set( 'Authorization', `bearer ${token}`);
    const clientToDelete = getResponse.body[0];
    const loginResponse = await api
      .post('/api/login')
      .send(newBusiness2);
    token = loginResponse.body.token;
    await api
      .delete(`/api/clients/${clientToDelete.id}`)
      .set( 'Authorization', `bearer ${token}`)
      .expect(401);
  });

  test('Delete a client with correct id and correct token sucessfully', async () => {
    const loginResponse = await api
      .post('/api/login')
      .send(newBusiness);
    token = loginResponse.body.token;
    const getResponse = await api
      .get('/api/clients')
      .set( 'Authorization', `bearer ${token}`);
    const clientToDelete = getResponse.body[0];
    await api
      .delete(`/api/clients/${clientToDelete.id}`)
      .set( 'Authorization', `bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    const response = await api
      .get('/api/clients/all')
      .set( 'Authorization', `bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(response.body).toHaveLength(3);
  });
});

afterAll(() => {
  mongoose.connection.close()
});