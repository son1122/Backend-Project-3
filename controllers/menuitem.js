const MenuItems = require("../models").MenuItem;
const { Op } = require("sequelize");
//Get all menu items (just in case we want all of the menu items)
const getAllMenuItem = async (req, res) => {
  try {
    await MenuItems.findAll().then((menuitems) => {
      console.log("Menu Items >> ", menuitems);
      res.json(menuitems);
    });
  } catch (err) {
    res.status(500).send({ message: "Menu Items not found." });
  }
};

//Get all menu items by category, so that when user choose between category the orderview will show only the chosen category (default is "food", see order.js in client)
const allMenuItemByCategory = async (req, res) => {
  try {
    console.log("req.params.id", req.params.catid);
    const categoryId = req.params.catid;
    await MenuItems.findAll({
      where: { category: `${categoryId}` },
    }).then((menuitems) => {
      res.json(menuitems);
    });
  } catch (err) {
    res.status(500).send({ message: "Menu by Id not found." });
  }
};

//Get menu item by query given from the search bar.
const searchMenuItem = async (req, res) => {
  try {
    const { q: query } = req.query;
    if (query) {
      await MenuItems.findAll({
        where: { name: { [Op.iLike]: `%${query}%` } },
      }).then((menuitems) => {
        res.send(menuitems);
      });
    } else {
      await MenuItems.findAll({
        where: { category: "food" },
      }).then((menuitems) => {
        res.send(menuitems);
      });
    }
  } catch (error) {
    res.status(500).send({ message: "Searched Menu Item not found." });
  }
};

module.exports = {
  getAllMenuItem,
  allMenuItemByCategory,
  searchMenuItem,
};
