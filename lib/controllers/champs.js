const { Router } = require('express');
const WorldChamps = require('../models/WorldChamps');

module.exports = Router().get('/', async (req, res) => {
  const champs = await WorldChamps.getAll();
  const filtered = champs.map(({ id, name }) => ({ id, name }));
  res.json(filtered);
});
