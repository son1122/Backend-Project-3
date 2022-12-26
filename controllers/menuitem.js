const MenuItems = require("../models").MenuItem;

const getAllMenuItem = async (req, res) => {
  try {
    await MenuItems.findAll().then((menuitems) => {
      res.json(menuitems);
    });
  } catch (err) {
    res.status(500).send({ message: "Menu Items not found." });
  }
};

module.exports = {
  getAllMenuItem,
};
