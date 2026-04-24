const request = require('supertest');
const app = require('../server'); // импортируем реальное приложение

test('GET / должен вернуть 200', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
});
