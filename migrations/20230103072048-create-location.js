'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      village: {
        type: Sequelize.STRING
      },
      road: {
        type: Sequelize.STRING
      },
      subdistrict: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      postalCode: {
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.DOUBLE
      },
      lng: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Locations');
  }
};