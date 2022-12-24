"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Customers",
      [
        {
          name: "Tonson",
          phone: "012-345-6789",
        },
        {
          name: "Jordan",
          phone: "034-567-8912",
        },
        {
          name: "Toncha",
          phone: "045-678-9123",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Customers", null, {});
  },
};
