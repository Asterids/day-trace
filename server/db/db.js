const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/daytrace', {
    logging: false
  }
)
module.exports = db;
