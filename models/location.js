'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Location.init({
    address: DataTypes.STRING,
    village: DataTypes.STRING,
    road: DataTypes.STRING,
    subdistrict: DataTypes.STRING,
    district: DataTypes.STRING,
    province: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};