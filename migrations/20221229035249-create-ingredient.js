'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      isMeat: {
        type: Sequelize.STRING
      },
      isSauce: {
        type: Sequelize.STRING
      },
      isFruits: {
        type: Sequelize.STRING
      },
      isVegatables: {
        type: Sequelize.STRING
      },
      isAnimalProduct: {
        type: Sequelize.STRING
      },
      isGrain: {
        type: Sequelize.STRING
      },
      isSpice: {
        type: Sequelize.STRING
      },
      calories: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Ingredients');
  }
};