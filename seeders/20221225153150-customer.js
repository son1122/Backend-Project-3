"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "Customers",
      [
        {
          firstname: "John",
          lastname: "Doe",
          phone: "011-111-1111",
        },
        {
          firstname: "Jane",
          lastname: "Doe",
          phone: "022-222-2222",
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
