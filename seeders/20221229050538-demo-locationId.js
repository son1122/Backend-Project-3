'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Locations',[
          {
            address:"123/123",
            village:"test Village",
            road:"Some Road",
            subdistrict:"Bangkon1",
            district:"Bangkok2",
            province:"Bangkok",
            postalCode: 10120,
            country:"Thailand"
          },
        {
          address:"4321",
          village:"test Village 33",
          road:"Some Road",
          subdistrict:"Bangkon13",
          district:"Bangkok23",
          province:"Bangkok3",
          postalCode: 10920,
          country:"Thailand"
        }
      ])
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
