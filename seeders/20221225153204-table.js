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
      "Tables",
      [
        {
          table_number: 1,
          capacity: 6,
        },
        {
          table_number: 2,
          capacity: 6,
        },
        {
          table_number: 3,
          capacity: 6,
        },
        {
          table_number: 4,
          capacity: 6,
        },
        {
          table_number: 5,
          capacity: 6,
        },
        {
          table_number: 6,
          capacity: 6,
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
    await queryInterface.bulkDelete("Tables", null, {});
  },
};
