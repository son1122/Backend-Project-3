const { where } = require("sequelize");
const MenuItemIngredient = require("../models").MenuItemIngredient;
const MenuItem = require("../models").MenuItem;
const Ingredient = require("../models").Ingredient;
const Customer = require("../models").Customer;
const Chef = require("../models").Chef;
const Waiter = require("../models").Waiter;
const Order = require("../models").Order;
const Seller = require("../models").Seller;
const Location = require("../models").Location;
const testDashboard = (req, res) => {
  res.json("test_dashboard");
};
const getMenuDashboard = async (req, res) => {
  console.log("TEST1");
  try {
    await MenuItem.findAll({
      where: { id: req.params.id },
      include: [
        {
          model: Ingredient,
          // attributes:['name','id','unit'],
        },
      ],
      // attributes: ['name','id','img','price']
    }).then((fruit) => {
      console.log(fruit);
      console.log("TEST");
      res.json(fruit);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Menu not found." });
  }
};
const getMenu = async (req, res) => {
  console.log("TEST1");
  try {
    await MenuItem.findAll({
      attributes: ["name", "id", "img", "price"],
    }).then((fruit) => {
      console.log("menu get");
      res.json(fruit);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Menuitem not found." });
  }
};
const getCustomer = async (req, res) => {
  console.log("TEST1");
  try {
    await Customer.findAll({
      attributes: ["id", "firstname", "lastname", "phone", "email"],
    }).then((fruit) => {
      console.log("menu get");
      res.json(fruit);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Customer not found." });
  }
};
const getWaiter = async (req, res) => {
  console.log("TEST1");
  try {
    await Waiter.findAll({
      // attributes: ['id','firstname','lastname','phone','email'],
    }).then((fruit) => {
      console.log("menu get");
      res.json(fruit);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Waiter not found." });
  }
};
const getChef = async (req, res) => {
  console.log("TEST1");
  try {
    await Chef.findAll({
      // attributes: ['id','firstname','lastname','phone','email'],
    }).then((fruit) => {
      console.log("menu get");
      res.json(fruit);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Chef not found." });
  }
};
const getOrder = async (req, res) => {
  console.log("TEST1");
  try {
    await Order.findAll({
      // attributes: ['id','firstname','lastname','phone','email'],
      include: [
        {
          model: Customer,
          // attributes:['name','id','unit'],
        },
      ],
    }).then((fruit) => {
      console.log("menu get");
      res.json(fruit);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Order not found." });
  }
};
const getIngredient = async (req, res) => {
  console.log("TEST1");
  try {
    await Ingredient.findAll({}).then((fruit) => {
      console.log("menu get");
      res.json(fruit);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Ingredient not found." });
  }
};
const getSeller = async (req, res) => {
  console.log("TEST1");
  try {
    await Seller.findAll({}).then((fruit) => {
      console.log("menu get");
      res.json(fruit);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Seller not found." });
  }
};
const getLocationSeller = (req, res) => {
  try {
    Seller.findAll({
      include: [
        {
          model: Location,
        },
      ],
    }).then((fruit) => {
      res.json(fruit);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Location not found." });
  }
};
const getLocationCustomer = (req, res) => {
  try {
    Customer.findAll({
      include: [
        {
          model: Location,
        },
      ],
    }).then((fruit) => {
      res.json(fruit);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Location not found." });
  }
};
module.exports = {
  getMenuDashboard,
  getMenu,
  getCustomer,
  getChef,
  getWaiter,
  getOrder,
  getIngredient,
  getSeller,
  getLocationSeller,
  getLocationCustomer,

};
