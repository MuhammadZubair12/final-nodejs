
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const hooks = {};

const tableName = 'company';

const Company = sequelize.define('Company', {
    company_name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    longitude: {
        type: Sequelize.STRING,
    },
    latitude: {
        type: Sequelize.STRING,
    },
    phone_number: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.STRING,
    }
}, { hooks, tableName });

module.exports = Company;
