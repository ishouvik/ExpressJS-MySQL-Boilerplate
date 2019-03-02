const Sequelize = require('sequelize')

module.exports = {
  'development': {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    operatorsAliases: Sequelize.Op
  },
  'test': {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD || null,
    database: `${process.env.DB_NAME}_test`,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    operatorsAliases: Sequelize.Op
  },
  'production': {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    operatorsAliases: Sequelize.Op
  }
}
