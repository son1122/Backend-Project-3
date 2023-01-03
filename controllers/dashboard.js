const { where } = require("sequelize");
const MenuItemIngredient = require("../models").MenuItemIngredient;
const MenuItem = require("../models").MenuItem;
const Ingredient = require("../models").Ingredient;
const testDashboard = (req, res) => {
  res.json("test_dashboard");
};
const getMenuDashboard = async (req, res) => {
  try {
    await MenuItem.findAll({
      where: { id: 1 },
      include: [{ model: Ingredient, attributes: ["name", "id", "unit"] }],
      attributes: ["name", "id", "img", "price"],
    }).then((res) => {
      res.json(res);
    });
  } catch (err) {
    res.status(500).send({ message: "Order not found." });
  }
};
const getMenu = async (req, res) => {
  try {
    await MenuItem.findAll({
      attributes: ["name", "id", "img", "price"],
    }).then((res) => {
      res.json(res);
    });
  } catch (err) {
    res.status(500).send({ message: "Order not found." });
  }
};
module.exports = {
  getMenuDashboard,
  getMenu,
};
