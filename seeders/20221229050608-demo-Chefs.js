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
        responsible: "Head Chef",
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
          responsible: "Second Chef",
        },

      ], {});

  },
  // await queryInterface.bulkInsert('People', [{
  //   name: 'John Doe',
  //   isBetaMember: false
  // }], {});
  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Chef', null, {});

  }
};
