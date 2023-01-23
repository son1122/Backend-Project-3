"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Order.belongsTo(models.Table, {foreignKey: "table_number"});
            Order.belongsTo(models.Customer, {foreignKey: "customer_id"});
            Order.belongsToMany(models.MenuItem, {
                through: "OrderDetail",
                foreignKey: "order_id",
                otherKey: "menu_item_id",
            });
        }
    }

    Order.init(
        {
            table_number: DataTypes.INTEGER,
            customer_id: DataTypes.INTEGER,
            order_date: DataTypes.DATE,
            status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Order",
        }
    );
    return Order;
};
