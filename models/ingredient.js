'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ingredient.init({
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    isMeat: DataTypes.STRING,
    isSauce: DataTypes.STRING,
    isFruits: DataTypes.STRING,
    isVegatables: DataTypes.STRING,
    isAnimalProduct: DataTypes.STRING,
    isGrain: DataTypes.STRING,
    isSpice: DataTypes.STRING,
    calories: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};