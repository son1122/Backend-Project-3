'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chef extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Chef.belongsToMany(models.MenuItem, {
        through: "ChefMenu",
        foreignKey: "chefId",
        otherKey: "menuItemId",
      });
    }
  }
  Chef.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    govermentId: DataTypes.STRING,
    nickName: DataTypes.STRING,
    responsible: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chef',
  });
  return Chef;
};