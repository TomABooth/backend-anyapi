const pool = require('../utils/pool.js');
module.exports = class WorldChamps {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.venue = row.venue;
    this.year = row.year;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from champions');
    return rows.map((champRow) => new WorldChamps(champRow));
  }

  static async getById(id) {
    const { rows } = await pool.query('select * from champions WHERE id =$1', [
      id,
    ]);

    return new WorldChamps(rows[0]);
  }
};
