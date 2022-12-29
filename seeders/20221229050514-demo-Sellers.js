'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sellers', [{
      name:'I am Seller 1',
      companyId:1,
      locationId:1,
      description:"i like this seller 1",
      phone: "0900001234"
    },
      {
        name:'I am Seller 2',
        companyId:1,
        locationId:1,
        description:"i like this seller 2",
        phone: "0900005678"
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
