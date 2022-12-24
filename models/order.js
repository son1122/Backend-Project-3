"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Table, { foreignKey: "tableId" });
      Order.belongsTo(models.Customer, { foreignKey: "customerId" });
      Order.belongsToMany(models.Dish, {
        through: "DishOrder",
        foreignKey: "orderId",
        otherKey: "dishId",
      });
    }
  }
  Order.init(
    {
      tableId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
