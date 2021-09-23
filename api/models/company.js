
const Sequelize = require('sequelize');
const bcryptService = require('../services/bcrypt.service');

const sequelize = require('../../config/database');

const hooks = {};

const tableName = 'companies';

const Company = sequelize.define('Company', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
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
