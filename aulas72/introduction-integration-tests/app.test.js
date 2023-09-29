const supertest = require('supertest');
const app = require('./app');


test('GET /aplicarDesconto/10/5', async () => {
    const response = await supertest(app)
    .get('/aplicarDesconto/10/5');
    
    expect(response.statusCode).toEqual(200);
    expect(response.body.valorDescontado).toEqual(5);
    })


test('GET /idade/2003', async () => {
    const response = await supertest(app).get('/idade/2003');
    expect(response.statusCode).toEqual(200);
    expect(response.body.idade).toEqual(20);
})

test('GET /maioridade/19', async () => {
    const response = await supertest(app).get('/maioridade/19');
    expect(response.statusCode).toEqual(200);
    expect(response.body.maior).toEqual(true);
})