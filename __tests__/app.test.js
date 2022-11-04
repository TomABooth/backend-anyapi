const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { champs } = require('../data/champs-data.js');

describe('champs route', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/champs should return a list of champs', async () => {
    const res = await request(app).get('/champs');
    const expected = champs.map((champ) => {
      return { id: champ.id, name: champ.name };
    });
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
