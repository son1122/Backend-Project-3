'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WaiterTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  WaiterTable.init({
    tableId: DataTypes.INTEGER,
    waiterId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WaiterTable',
  });
  return WaiterTable;
};