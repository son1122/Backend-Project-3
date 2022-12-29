'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Waiters', null, {});
    await queryInterface.bulkDelete('WaiterTables', null, {});
    await queryInterface.bulkDelete('Sellers', null, {});
    await queryInterface.bulkDelete('Orders', null, {});
    await queryInterface.bulkDelete('MenuItemIngredient', null, {});
    await queryInterface.bulkDelete('locationId', null, {});
    await queryInterface.bulkDelete('IngredientSellers', null, {});
    await queryInterface.bulkDelete('Ingredients', null, {});
    await queryInterface.bulkDelete('Chefs', null, {});
    await queryInterface.bulkDelete('ChefMenus', null, {});
  }
};
