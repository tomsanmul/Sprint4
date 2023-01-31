
const request = require("supertest");

const baseUrl = 'http://localhost:3000/';

describe('Todos endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
			.get('/user');
		expect(response.statusCode).toBe(200);
	});
});