'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Seller extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Seller.belongsTo(models.Location, {foreignKey: "locationId"});
            Seller.belongsTo(models.Company, {foreignKey: "companyId"});
        }
    }

    Seller.init({
        name: DataTypes.STRING,
        companyId: DataTypes.INTEGER,
        locationId: DataTypes.INTEGER,
        description: DataTypes.STRING,
        phone: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Seller',
    });
    return Seller;
};