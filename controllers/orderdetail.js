const OrderDetail = require("../models").OrderDetail;
const Order = require("../models").Order;
const MenuItem = require("../models").MenuItem;

//Get order details of the selected table to show in checkout page.
const getOrderDetailMatch = async (req, res) => {
    try {
        // 1. Get orders that have matched table_number and status = "inprogress" and assigned to variable "orders".
        const orders = await Order.findAll({
            where: {table_number: req.params.tableNumber, status: "inprogress"},
        });
        //If there is no orders then send "Order not found error"
        if (!orders.length) {
            return res
                .status(404)
                .send({error: "Order not found for selected table"});
        }
        // 2. Get all OrderDetails where order_id is the same as the mapped "orders" variable and assigned to "orderDetails" variabl.
        const orderDetails = await OrderDetail.findAll({
            where: {order_id: orders.map((order) => order.id)},
        });

        // 3. Use "orderDetails" variable map it and assigned "menuItemIds" with all the menu_item_id
        const menuItemIds = orderDetails.map((detail) => detail.menu_item_id);

        // 4. Find All MenuItem where ids matches the ids in "menuItemIds" variable.
        const menuItems = await MenuItem.findAll({where: {id: menuItemIds}});

        // 5. Mapping menu items with filter and total quantity return the details and assigned to "menuItemsWithQuantities" variable
        const menuItemsWithQuantities = menuItems.map((item) => {
            // 6. Filter "orderDetails" since in orderdetails we store the menu_item_id from OrderDetails database
            // We use this to filter where the menu_item_id from orderDetail matches the mapped menuItem's id
            const detailsForItem = orderDetails.filter(
                (detail) => detail.menu_item_id === item.id
            );

            // 7. Then we find the total quantity by using reduce method to sum up all the menuitems that has been ordered by the selected tab;e
            // This is because the same table can order more than once and each menu items can be ordered more than once too, but the order id is different
            // That is why we have to sum up for all quantity from different orders.
            // 8. After that we return the needed data to the front-end and map out the data and render on the client ends
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
        res.send({menuItems: menuItemsWithQuantities});
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    getOrderDetailMatch,
};
