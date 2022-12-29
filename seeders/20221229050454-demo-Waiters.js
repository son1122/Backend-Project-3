'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Chef', [
      {
        username: "gordon1234",
        password: "1234",
        email: "gordon@gmail.com",
        phone: "090909090",
        firstName: "Gordon",
        lastName: "Lamsy",
        gorvermentId: "123123123123123",
        nickName: "YesChef",
      },
      {
        username: "gordon5678",
        password: "5678",
        email: "gordon2@gmail.com",
        phone: "090909090",
        firstName: "Gordon",
        lastName: "Lamsy",
        gorvermentId: "123123123123123",
        nickName: "NoChef",
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
    await queryInterface.bulkDelete('Waiter', null, {});
  }
};
