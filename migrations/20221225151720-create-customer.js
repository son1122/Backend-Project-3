"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Customers", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            firstname: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            lastname: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            phone: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
            },
            email: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
            },
            username: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            createdAt: {
                defaultValue: new Date(),
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                defaultValue: new Date(),
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Customers");
    },
};
