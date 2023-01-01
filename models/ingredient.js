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
      Ingredient.belongsToMany(models.MenuItem,{
        through:"MenuItemIngredients",
        foreignKey:"ingredientId",
        otherKey:"menuItemId",
      })
    }
  }
  Ingredient.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    isMeat: DataTypes.BOOLEAN,
    isSauce: DataTypes.BOOLEAN,
    isFruit: DataTypes.BOOLEAN,
    isVegetable: DataTypes.BOOLEAN,
    isAnimalProduct: DataTypes.BOOLEAN,
    isGrain: DataTypes.BOOLEAN,
    isSpice: DataTypes.BOOLEAN,
    calories: DataTypes.FLOAT,
    stock: DataTypes.DOUBLE,
    unit: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};