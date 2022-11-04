const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { champs } = require('../data/champs-data.js');
const { wchamps } = require('../data/wchamps-data.js');

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

  it('/champs/:id should return champs detail', async () => {
    const res = await request(app).get('/champs/1');
    const loic = {
      id: '1',
      name: 'Loic Bruni',
      venue: 'Les Gets',
      year: 2022,
    };
    expect(res.body).toEqual(loic);
  });
});

describe('wchamps route', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/wchamps should return a list of womens champs', async () => {
    const res = await request(app).get('/wchamps');
    const expected = wchamps.map((wchamp) => {
      return { id: wchamp.id, name: wchamp.name };
    });
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
