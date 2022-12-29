// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class MenuitemIngredients extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   MenuItemIngredients.init({
//     menuItemId: DataTypes.INTEGER,
//     ingredientId: DataTypes.INTEGER,
//     quantity: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'MenuItemIngredients',
//   });
//   return MenuItemIngredients;
// };