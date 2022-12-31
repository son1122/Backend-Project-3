'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('IngredientSellers',[
          {
            cost:100,
            quantity:500,
            comment:"buy kra phao",
            ingredientId:1,
            sellerId: 1,
          },
        {
          cost:250,
          quantity:60,
          comment:"buy egg",
          ingredientId:1,
          sellerId: 1,
        },
        {
          cost:90,
          quantity:600,
          comment:"buy kra phao",
          ingredientId:1,
          sellerId: 2,
        },
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
