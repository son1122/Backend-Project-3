'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class IngredientSeller extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    IngredientSeller.init({
        cost: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        comment: DataTypes.STRING,
        ingredientId: DataTypes.INTEGER,
        sellerId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'IngredientSeller',
    });
    return IngredientSeller;
};