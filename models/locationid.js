'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class locationId extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  locationId.init({
    address: DataTypes.STRING,
    village: DataTypes.STRING,
    road: DataTypes.STRING,
    subdistrict: DataTypes.STRING,
    district: DataTypes.STRING,
    province: DataTypes.STRING,
    postralCode: DataTypes.INTEGER,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'locationId',
  });
  return locationId;
};