const Order = require("../models/").Order;

const testOrder = (req, res) => {
  res.json("test_order");
};

module.exports = {
  testOrder,
};
