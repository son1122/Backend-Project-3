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
      "MenuItems",
      [
        {
          name: "Fried Rice",
          description: "Garlic Fried Rice",
          price: 50.0,
          img: "https://i.imgur.com/YA2TsH2.jpg",
          category: "food",
        },
        {
          name: "Pad Kra Pao",
          description: "Stir fried basil with chosen meat",
          price: 50.0,
          img: "https://i.imgur.com/vt6al2K.jpg",
          category: "food",
        },
        {
          name: "Tom Yum Kung",
          description: "Shrimp Tom Yum Soup",
          price: 150.0,
          img: "https://i.imgur.com/sCmxZ5S.jpg",
          category: "food",
        },
        {
          name: "Coca Cola",
          description: "",
          price: 15.0,
          img: "https://i.imgur.com/w13enO5.jpg",
          category: "beverage",
        },
        {
          name: "Water",
          description: "Garlic Fried Rice",
          price: 12.5,
          img: "https://i.imgur.com/vC031VP.jpg",
          category: "beverage",
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
    await queryInterface.bulkDelete("MenuItems", null, {});
  },
};
