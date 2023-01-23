'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ChefMenu extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    ChefMenu.init({
        chefId: DataTypes.INTEGER,
        menuItemId: DataTypes.INTEGER,
        comment: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ChefMenu',
    });
    return ChefMenu;
};