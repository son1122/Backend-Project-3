"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Customer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Customer.hasMany(models.Order, {foreignKey: "customer_id"});
            Customer.belongsTo(models.Location, {foreignKey: "locationId"});
        }
    }

    Customer.init(
        {
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING,
            phone: DataTypes.STRING,
            email: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Customer",
        }
    );
    return Customer;
};
