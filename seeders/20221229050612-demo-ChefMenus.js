'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('ChefMenus', [{
            chefId: 1,
            menuItemId: 1,
            comment: "cooking"
        },
            {
                chefId: 2,
                menuItemId: 2,
                comment: "Prepare"
            }
        ])
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
