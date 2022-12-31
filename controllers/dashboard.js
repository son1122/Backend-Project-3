const OrderDetail = require("../models").OrderDetail;
const testDashboard = (req, res) => {
    res.json("test_dashboard")
}
const getDashboard = async (req, res) => {
    try {
        await OrderDetail.findAll(
            // {include: { model: menuitem, required: true }}
        ).then((item) => {
            const data = [
                {
                    type: '分类一',
                    value: 27,
                }
            ];
            console.log(item);
            res.json(item);
        });
    } catch (err) {
        res.status(500).send({ message: "Order not found." });
    }
};

module.exports = {
    testDashboard,
    getDashboard

}