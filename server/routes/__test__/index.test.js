const app = require('../../app');
const request = require('supertest');

test('testing register', async () => {
    const data = await request(app).post('/auth/register').send({ firstName: 'John', lastName: 'Doe', email: 'john2.doe@gmail.com', password: 'johndoe123', passwordVerify: 'johndoe123' });
    expect(data.statusCode).toEqual(200);
});

test('testing login', async () => {
    const data = await request(app).post('/auth/login').send({ email: 'john2.doe@gmail.com', password: 'johndoe123' });
    expect(data.statusCode).toEqual(200);
});