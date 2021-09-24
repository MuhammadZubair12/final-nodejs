
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const hooks = {};

const tableName = 'assets';

const Assets = sequelize.define('Assets', {
    assets_code: {
        type: Sequelize.STRING,
    },
    name: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.STRING,
    }
}, { hooks, tableName });

module.exports = Assets;
