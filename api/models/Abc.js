const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const hooks = {};

const tableName = 'abc';

const Abc = sequelize.define('Abc', {
    name: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.STRING,
    }
}, { hooks, tableName });

module.exports = Abc;