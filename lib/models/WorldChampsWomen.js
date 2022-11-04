const pool = require('../utils/pool.js');
module.exports = class WorldChampsWomen {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.venue = row.venue;
    this.year = row.year;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from wchampions');
    return rows.map((wchampRow) => new WorldChampsWomen(wchampRow));
  }
};
