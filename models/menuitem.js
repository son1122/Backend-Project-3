"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MenuItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MenuItem.belongsToMany(models.Order, {
        through: "OrderDetail",
        foreignKey: "menu_item_id",
        otherKey: "order_id",
      });
      MenuItem.belongsToMany(models.Chef,{
          through: "ChefMenu",
          foreignKey: "menuItemId",
          otherKey:"chefId"
      });
      MenuItem.belongsToMany(models.Ingredient,{
          through: "MenuitemIngredient",
          foreignKey:"menuItemId",
          otherKey:"ingredientId"
      })
    }
  }
  MenuItem.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      img: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "MenuItem",
    }
  );
  return MenuItem;
};
