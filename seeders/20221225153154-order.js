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
      "Orders",
      [
        {
          table_number: 1,
          customer_id: 1,
          order_date: new Date(),
          status: "pending",
        },
        {
          table_number: 2,
          customer_id: null,
          order_date: new Date(),
          status: "inprogress",
        },
        {
          table_number: 3,
          customer_id: 2,
          order_date: new Date(),
          status: "completed",
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
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
