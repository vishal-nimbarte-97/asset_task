const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('assetDB', 'postgres', '2001', {
  host: 'localhost',
  dialect: 'postgres', // Change to your database dialect
  // logging: false, // Set to `false` if you don't want to see SQL queries
});

module.exports = sequelize;
