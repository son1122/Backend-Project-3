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
      description: {
        type: Sequelize.STRING
      },
      isMeat: {
        type: Sequelize.BOOLEAN
      },
      isSauce: {
        type: Sequelize.BOOLEAN
      },
      isFruit: {
        type: Sequelize.BOOLEAN
      },
      isVegetable: {
        type: Sequelize.BOOLEAN
      },
      isAnimalProduct: {
        type: Sequelize.BOOLEAN
      },
      isGrain: {
        type: Sequelize.BOOLEAN
      },
      isSpice: {
        type: Sequelize.BOOLEAN
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