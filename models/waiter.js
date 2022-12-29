'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Waiter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Waiter.belongsToMany(models.Tables,{
        through:"WaiterTable",
        foreignKey:"waiterId",
        otherKey:"tableId"
      })
    }
  }
  Waiter.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    govermentId: DataTypes.STRING,
    nickName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Waiter',
  });
  return Waiter;
};