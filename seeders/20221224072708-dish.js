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
      "Dishes",
      [
        {
          name: "Fried Rice",
          price: 50,
          img: "https://i.imgur.com/YA2TsH2.jpg",
          categoryId: 1,
        },
        {
          name: "Pad Kra Pao",
          price: 50,
          img: "https://i.imgur.com/vt6al2K.jpg",
          categoryId: 1,
        },
        {
          name: "Tom Yam Kung",
          price: 100,
          img: "https://i.imgur.com/sCmxZ5S.jpg",
          categoryId: 1,
        },
        {
          name: "Coke",
          price: 15,
          img: "https://i.imgur.com/w13enO5.jpg",
          categoryId: 2,
        },
        {
          name: "Water",
          price: 10,
          img: "https://i.imgur.com/vC031VP.jpg",
          categoryId: 2,
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
    await queryInterface.bulkDelete("Dishes", null, {});
  },
};
