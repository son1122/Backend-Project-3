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
      Ingredient.belongsToMany(models.MenuItem,{
        through:"MenuitemIngredient",
        foreignKey:"ingredientId",
        otherKey:"menuItemId"
      });
      Ingredient.belongsToMany(models.Seller,{
        through:"IngredientSeller",
        foreignKey:"ingredientId",
        otherKey:"sellerId"
      })
    }
  }
  Ingredient.init({
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    description: DataTypes.STRING,
    isMeat: DataTypes.BOOLEAN,
    isSauce: DataTypes.BOOLEAN,
    isFruit: DataTypes.BOOLEAN,
    isVegetable: DataTypes.BOOLEAN,
    isAnimalProduct: DataTypes.BOOLEAN,
    isGrain: DataTypes.BOOLEAN,
    isSpice: DataTypes.BOOLEAN,
    calories: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};