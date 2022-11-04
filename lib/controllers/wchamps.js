const { Router } = require('express');
const WorldChampsWomen = require('../models/WorldChampsWomen');

module.exports = Router().get('/', async (req, res) => {
  const wchamps = await WorldChampsWomen.getAll();
  const filtered = wchamps.map(({ id, name }) => ({ id, name }));
  res.json(filtered);
});
