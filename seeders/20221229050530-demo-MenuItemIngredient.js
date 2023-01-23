'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('MenuItemIngredients', [{
            menuItemId: 1,
            ingredientId: 1,
            quantity: 5,
        },
            {
                menuItemId: 1,
                ingredientId: 1,
                quantity: 5,
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
