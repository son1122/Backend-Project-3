'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Ingredients', [{
          name: 'Kra Phao',
          description:"Best thai Herb",
          isMeat:false,
          isSauce:false,
          isFruit:false,
          isVegetable:true,
          isAnimalProduct:false,
          isGrain:false,
          isSpice:true,
          calories: 37,
          stock:500,
          unit:false
      },
          {
              name: 'Rice',
              description:"Best thai Herb",
              isMeat:false,
              isSauce:false,
              isFruit:false,
              isVegetable:true,
              isAnimalProduct:false,
              isGrain:false,
              isSpice:true,
              calories: 130,
              stock:500,
              unit:false
          },
          {
              name: 'Egg',
              description:"Best thai Herb",
              isMeat:false,
              isSauce:false,
              isFruit:false,
              isVegetable:true,
              isAnimalProduct:false,
              isGrain:false,
              isSpice:true,
              calories: 70,
              stock:500,
              unit:false,
          },
          {
              name: 'Egg',
              description:"Best thai Herb",
              isMeat:false,
              isSauce:false,
              isFruit:false,
              isVegetable:true,
              isAnimalProduct:false,
              isGrain:false,
              isSpice:true,
              calories: 70,
              stock:500,
              unit:false,
          }

      ], {});


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
