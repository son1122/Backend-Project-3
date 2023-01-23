'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Companies', [
            {
                name: "AAA",
                locationId: 1,
                description: "Company that sell all ingredient",
                phone: "09323232"
            },
            {
                name: "BBB",
                locationId: 1,
                description: "Company that sell some ingredient but very cheap",
                phone: "09323232"
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
