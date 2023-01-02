const OrderDetail = require("../models").OrderDetail;
const Order = require("../models").Order;
const MenuItem = require("../models").MenuItem;

const getOrderDetailMatch = async (req, res) => {
  try {
    //Get orders that have matches table_number and status is inprogress.
    const orders = await Order.findAll({
      where: { table_number: req.params.tableNumber, status: "inprogress" },
    });
    //If there is no orders then send "Order not found error"
    if (!orders.length) {
      return res
        .status(404)
        .send({ error: "Order not found for selected table" });
      // return res.json({
      //   failed: { message: "No order found for selected table" },
      // });
    }
    //Get all orderDetails where order_id is the same as the mapped orders variable.
    const orderDetails = await OrderDetail.findAll({
      where: { order_id: orders.map((order) => order.id) },
    });

    // now we use the orderDetails we get that has the matched order_id with the order table -> get the menu_item_id of it and store it in menuItemIds
    const menuItemIds = orderDetails.map((detail) => detail.menu_item_id);

    // now we find all MenuItem where the id matched the matched the menuItemsIds and stored it in menuItems.
    const menuItems = await MenuItem.findAll({ where: { id: menuItemIds } });

    //
    const menuItemsWithQuantities = menuItems.map((item) => {
      const detailsForItem = orderDetails.filter(
        (detail) => detail.menu_item_id === item.id
      );
      const totalQuantity = detailsForItem.reduce(
        (sum, detail) => sum + detail.quantity,
        0
      );
      return {
        img: item.img,
        name: item.name,
        quantity: totalQuantity,
        price: item.price,
      };
    });
    res.send({ menuItems: menuItemsWithQuantities });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getOrderDetailMatch,
};
