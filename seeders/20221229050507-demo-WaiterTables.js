'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('WaiterTables', [
        {
          tableId: 1,
          waiterId: 1,
        },
        {
          tableId: 1,
          waiterId: 2,
        },
      {
        tableId: 2,
        waiterId: 1,
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
