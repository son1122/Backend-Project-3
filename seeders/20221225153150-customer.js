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
          email: "johndoe@mail.com",
          username: "johndoe",
          password: "1234",
        },
        {
          firstname: "Jane",
          lastname: "Doe",
          phone: "022-222-2222",
          email: "janedoe@mail.com",
          username: "janedoe",
          password: "1234",
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
