
module.exports = (sequelize, Sequelize) => {

    var Company = sequelize.define('company', {
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
    });

    return Company;
}