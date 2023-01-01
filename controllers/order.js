const { user } = require(".");

const Order = require("../models").Order;
const OrderDetail = require("../models").OrderDetail;

const testOrder = (req, res) => {
  Order.findAll()
    .then((item) => {
      console.log(item);
      res.json(item);
    })
    .catch((err) => {
      console.log(err);
    });
};
const createOrder = async (req, res) => {
  // I set customer to null since we currently not supporting customerId
  const { menuItems, table_number, customer_id, order_date, status } = req.body;

  // Create new order which takes data from the req.body above.
  const order = await Order.create({
    table_number,
    customer_id,
    order_date,
    status,
  });

  //Looping through the items received, (can use mapping in case using promises but i dont know how)
  for (const menuItem of menuItems) {
    if (menuItem.id) {
      await OrderDetail.create({
        order_id: order.id,
        menu_item_id: menuItem.id,
        quantity: menuItem.quantity,
      });
    }
  }

  // show Ordersdetail

  res.json({
    success: { message: "Added order successfully." },
  });
};

const showOrderDetail = (req, res) => {
  OrderDetail.findAll().then((orderDetail) => {
    console.log("fucntion is working");
    res.json(orderDetail);
  });
};

const orderByTable = (req, res) => {
  Order.findAll({
    where: { table_number: req.params.index, status: "inprogress" },
  }).then((item) => {
    console.log("fucntion is working");
    res.json(item);
  });
};

const showOrder = (req, res) => {
  Order.findByPk(req.params.index)
    .then((item) => {
      console.log(item);
      res.json(item);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  testOrder,
  createOrder,
  showOrder,
  orderByTable,
  showOrderDetail,
};
