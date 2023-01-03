const MenuItems = require("../models").MenuItem;
const { Op } = require("sequelize");
//Get all menu items (just in case we want all of the menu items)
const getAllMenuItem = async (req, res) => {
  try {
    await MenuItems.findAll().then((menuitems) => {
      res.json(menuitems);
    });
  } catch (err) {
    res.status(500).send({ message: "Menu Items not found." });
  }
};

// Find all menu items by category
// 1. Find all menuitems, where category is the param passed from the client
// 2. Response only items with matched category Id
const allMenuItemByCategory = async (req, res) => {
  try {
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
// 1. Declare a query variable and assign it with the query parameter we get as we write in client >> http.../search?q=${category}
// 2. if q=food, then the query variable will be assigned with food
// 3. If query value is exist we find all menu items where name matches the query
// 4. Else statement LINE:45 is for setting default value.
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
