const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'postgres', 'your_new_password', {
  host: 'localhost',
  dialect: 'postgres',
});

// Sync DB
sequelize.sync().then(() => {
  console.log('Database synced');
});

module.exports = sequelize;
