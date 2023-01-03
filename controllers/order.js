const { user } = require(".");

const Order = require("../models").Order;
const OrderDetail = require("../models").OrderDetail;

const testOrder = (req, res) => {
  Order.findAll()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {});
};

//Creating order
// 1. Retrieve req.body and assign to variables.
// 2. Create order from the variables received.
// 3. For each menuItems we received if menuitem.id exist create orderdetail for those menu items.
const createOrder = async (req, res) => {
  const { menuItems, table_number, customer_id, order_date, status } = req.body;
  const order = await Order.create({
    table_number,
    customer_id,
    order_date,
    status,
  });
  for (const menuItem of menuItems) {
    if (menuItem.id) {
      await OrderDetail.create({
        order_id: order.id,
        menu_item_id: menuItem.id,
        quantity: menuItem.quantity,
      });
    }
  }
  res.json({
    success: { message: "Added order successfully." },
  });
};

//Update Order Status
// 1. This function will findall order using param, and the status of the table must be inprogress.
// 2. Because the orders of selected table that have orders will always be "inprogress"
// 3. Then .then and use the retrieved data map and update the status to completed where the id matched.
const updateOrderStatus = async (req, res) => {
  await Order.findAll({
    where: { table_number: req.params.tableNumber, status: "inprogress" },
  })
    .then((orders) => {
      const orderIds = orders.map((order) => order.id);
      return Order.update(
        { status: "completed" },
        { where: { id: orderIds } }
      ).then(() => ({ success: true }));
    })
    .catch((err) => {});
};

// Find all orderdetail
const showOrderDetail = (req, res) => {
  OrderDetail.findAll().then((orderDetail) => {
    res.json(orderDetail);
  });
};

// Find all order by table number that status is inprogress
const orderByTable = (req, res) => {
  Order.findAll({
    where: { table_number: req.params.index, status: "inprogress" },
  }).then((item) => {
    res.json(item);
  });
};

//Show order by param
const showOrder = (req, res) => {
  Order.findByPk(req.params.index)
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {});
};

module.exports = {
  testOrder,
  createOrder,
  showOrder,
  orderByTable,
  showOrderDetail,
  updateOrderStatus,
};
